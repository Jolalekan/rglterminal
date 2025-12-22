import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import crypto from "crypto";
import { generateSlug } from "@/lib/slug";

// Verify webhook signature (security)
function verifySignature(payload: string, signature: string) {
  const secret = process.env.RESEND_WEBHOOK_SECRET!;
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return hash === signature;
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const signature = req.headers.get('resend-signature') || '';
    
    // Verify webhook is from Resend (security)
    if (!verifySignature(payload, signature)) {
      console.error("❌ Invalid webhook signature");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const body = JSON.parse(payload);
    
    console.log("📧 Received inbound email:", {
      from: body.from,
      to: body.to,
      subject: body.subject,
    });
    
    const { from, to, subject, html, text } = body;
    
    // Extract customer email
    const fromEmail = from.email || from;
    
    // Find or create conversation
    let conversation = await prismadb.conversation.findUnique({
      where: { email: fromEmail },
      include: { messages: true }
    });
    
    if (!conversation) {
      const slug = generateSlug(from.name, fromEmail, "inbound");
      // New conversation
      conversation = await prismadb.conversation.create({
        
        data: {
          email: fromEmail,
          name: from.name || fromEmail,
          slug,
          lastMessageAt: new Date()

        },
        include: { messages: true }
      });
    }
    
    // Save inbound message
    await prismadb.message.create({
      data: {
        conversationId: conversation.id,
        direction: "inbound",
        from: fromEmail,
        to: to.email || to,
        subject: subject,
        body: text || html,
      }
    });
    
    // Update conversation timestamp
    await prismadb.conversation.update({
      where: { id: conversation.id },
      data: { lastMessageAt: new Date() }
    });
    
    console.log("✅ Inbound message saved to database");
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}