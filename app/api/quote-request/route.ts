import { transporter } from "@/lib/nodemailer";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { fullName, email, phone, company, body, serviceType } = data;

    if (!email || !body) {
      return NextResponse.json(
        { error: "Email and message body are required" },
        { status: 400 }
      );
    }

  
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

