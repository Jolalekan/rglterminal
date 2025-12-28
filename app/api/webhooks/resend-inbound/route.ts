import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { Webhook } from 'svix';
import { generateSlug } from "@/lib/slug";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

interface ResendWebhookEvent {
  type: string;
  created_at: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject?: string;
    created_at: string;
    message_id?: string;
    attachments?: any[];
  };
}

export async function POST(req: NextRequest) {
  console.log("reced request", req)
  try {
    const payload = await req.text();
    const svixId = req.headers.get('svix-id');
    const svixTimestamp = req.headers.get('svix-timestamp');
    const svixSignature = req.headers.get('svix-signature');

    console.log('Received webhook');

    // Verify signature
    const wh = new Webhook(process.env.RESEND_WEBHOOK_SECRET!);

    let event: ResendWebhookEvent;
    try {
      event = wh.verify(payload, {
        'svix-id': svixId!,
        'svix-timestamp': svixTimestamp!,
        'svix-signature': svixSignature!,
      }) as ResendWebhookEvent;
    } catch (err) {
      console.error('❌ Webhook verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    console.log('✅ Webhook verified! Event type:', event.type);

    // Only process email.received events
    if (event.type !== 'email.received') {
      console.log(`ℹ️ Ignoring event type: ${event.type}`);
      return NextResponse.json({ received: true, ignored: true });
    }

    const emailData = event.data;
    
    console.log("📧 Processing inbound email:", {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      email_id: emailData.email_id
    });

    // Fetch the full email content using the correct API method
    let emailHtml = '';
    let emailBody = '';
    
    try {
      const { data: fullEmail } = await resend.emails.receiving.get(emailData.email_id);
        console.log("full data", fullEmail)
      if (fullEmail) {
        emailHtml = fullEmail.html || '';
        emailBody = fullEmail.text || emailHtml || '';
        console.log('✅ Fetched email content');
      }
    } catch (fetchError) {
      console.error('⚠️ Could not fetch email content:', fetchError);
      emailBody = `Email received: ${emailData.subject || '(no subject)'}`;
    }

    // Extract sender info
    const fromEmail = emailData.from;
    const senderName = fromEmail.split('@')[0];
    const toEmail = Array.isArray(emailData.to) ? emailData.to[0] : emailData.to;
    
    // Find or create conversation
    let conversation = await prismadb.conversation.findUnique({
      where: { email: fromEmail },
      include: { messages: true }
    });
    
    if (!conversation) {
      const slug = generateSlug(senderName, fromEmail, "inbound");
      conversation = await prismadb.conversation.create({
        data: {
          email: fromEmail,
          name: senderName,
          slug,
          lastMessageAt: new Date()
        },
        include: { messages: true }
      });
      console.log('✅ Created new conversation:', conversation.id);
    } else {
      await prismadb.conversation.update({
        where: { id: conversation.id },
        data: { lastMessageAt: new Date() }
      });
      console.log('✅ Updated existing conversation:', conversation.id);
    }
    
    // Save message with full content
  await prismadb.message.create({
  data: {
    conversationId: conversation.id,
    direction: "inbound",
    from: fromEmail,
    to: toEmail,
    subject: emailData.subject || '(no subject)',
    body: emailBody,
    htmlBody: emailHtml,
    emailId: emailData.email_id,
    isRead: false, // New inbound messages are unread
    createdAt: new Date(emailData.created_at)
  }
});
    
    console.log("✅ Inbound message saved to database with full content");
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ 
      error: "Failed",
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
