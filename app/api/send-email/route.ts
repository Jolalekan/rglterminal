import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { transporter } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, phone, company, body, serviceType } = data;

    if (!email || !body) {
      return NextResponse.json(
        { error: "Email and message body are required" },
        { status: 400 }
      );
    }

    // Save quote request to database
    const quoteRequest = await prismadb.quoteRequest.create({
      data: {
        fullName,
        email,
        phone,
        body,
        company,
        serviceType,
      },
    });

    // Notify yourself via Zoho Mail
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong> ${body}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Quote sent successfully", data: quoteRequest },
      { status: 201 }
    );
  } catch (error) {
    console.error("QUOTE_REQUEST_ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}



// export async function POST(req: Request) {
//   try {
//     const { to, subject, body, originalMessage, conversationId } = await req.json();
    
//     console.log("Sending reply to:", to);
    
//     const result = await sendReplyEmail({ 
//       to, 
//       subject, 
//       body, 
//       originalMessage 
//     });
    
//     if (!result.success) {
//       throw new Error('Failed to send email');
//     }
    
//     // Save outbound message to conversation
//     if (conversationId) {
//       await prismadb.message.create({
//         data: {
//           conversationId,
//           direction: "outbound",
//           from: 'info@rglterminal.com',
//           to,
//           subject,
//           body,
//         }
//       });
      
//       // Update conversation timestamp
//       await prismadb.conversation.update({
//         where: { id: conversationId },
//         data: { lastMessageAt: new Date() }
//       });
      
//       // Update related quote request status if exists
//       const quoteRequest = await prismadb.quoteRequest.findFirst({
//         where: { conversationId }
//       });
      
//       if (quoteRequest) {
//         await prismadb.quoteRequest.update({
//           where: { id: quoteRequest.id },
//           data: { 
//             status: "Responded",
//             respondedAt: new Date()
//           }
//         });
//       }
      
//       // Update related contact status if exists
//       const contact = await prismadb.contact.findFirst({
//         where: { conversationId }
//       });
      
//       if (contact) {
//         await prismadb.contact.update({
//           where: { id: contact.id },
//           data: { 
//             status: "Responded",
//             respondedAt: new Date()
//           }
//         });
//       }
//     }
    
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

