// import { sendEmail } from "@/lib/sendEmail";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { to, subject, body, originalMessage } = await req.json();
    
//     const html = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px;">
//         <div>${body.split('\n').map((line: string) => `<p>${line}</p>`).join('')}</div>
//         ${originalMessage ? `
//           <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
//           <p style="color: #666; font-size: 14px;">Original message:</p>
//           <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//             <p style="white-space: pre-wrap;">${originalMessage}</p>
//           </div>
//         ` : ''}
//       </div>
//     `;
    
//     const result = await sendEmail({ to, subject, html });
    
//     if (!result.success) {
//       throw new Error('Failed to send email');
//     }
    
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to send" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { sendReplyEmail } from "@/lib/email";


export async function POST(req: Request) {
  try {
    const { to, subject, body, originalMessage, conversationId } = await req.json();
    
    console.log("Sending reply to:", to);
    
    // Send email via Resend
    const result = await sendReplyEmail({ 
      to, 
      subject, 
      body, 
      originalMessage 
    });
    
    if (!result.success) {
      throw new Error('Failed to send email');
    }
    
    // Save outbound message to conversation
    if (conversationId) {
      await prismadb.message.create({
        data: {
          conversationId,
          direction: "outbound",
          from: 'info@rglterminal.com',
          to,
          subject,
          body,
        }
      });
      
      // Update conversation timestamp
      await prismadb.conversation.update({
        where: { id: conversationId },
        data: { lastMessageAt: new Date() }
      });
      
      // Update related quote request status if exists
      const quoteRequest = await prismadb.quoteRequest.findFirst({
        where: { conversationId }
      });
      
      if (quoteRequest) {
        await prismadb.quoteRequest.update({
          where: { id: quoteRequest.id },
          data: { 
            status: "Responded",
            respondedAt: new Date()
          }
        });
      }
      
      // Update related contact status if exists
      const contact = await prismadb.contact.findFirst({
        where: { conversationId }
      });
      
      if (contact) {
        await prismadb.contact.update({
          where: { id: contact.id },
          data: { 
            status: "Responded",
            respondedAt: new Date()
          }
        });
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

