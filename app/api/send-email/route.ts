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
    
    console.log("✅ Email sent and saved");
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}



// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   try {
//     const { to, subject, body, originalMessage } = await req.json();


//      console.log("=== EMAIL DEBUG ===");
//     console.log("To:", to);
//     console.log("Subject:", subject);
//     console.log("GMAIL_USER:", process.env.GMAIL ? "✅ Set" : "❌ MISSING");
//     console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "✅ Set" : "❌ MISSING");
//     console.log("EMAIL_FROM:", process.env.EMAIL_FROM);



//      const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.GMAIL,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });
//      await transporter.verify();
//     // Email template
//     const htmlBody = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <div style="padding: 20px;">
//       ${body.split('\n').map((line: string) => `<p>${line}</p>`).join('')}
//     </div>
        
//         <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
//           <p style="color: #666; font-size: 12px; margin-bottom: 10px;">Original message:</p>
//           <div style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #007bff;">
//             <p style="color: #333; white-space: pre-wrap;">${originalMessage}</p>
//           </div>
//         </div>
//       </div>
//     `;

//     await transporter.sendMail({
//       from: '"RGL Terminal" <info@rglterminal.com>', // Your business email
//       to,
//       subject,
//       text: body,
//       html: htmlBody,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email send error:", error);
//      return NextResponse.json({ 
//       success: false, 
//       error: error instanceof Error ? error.message : String(error)
//     }, { status: 500 });
//   }
// }