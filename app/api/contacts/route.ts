import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { transporter } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, surname, email, phone, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const contact = await prismadb.contact.create({
      data: { firstName, surname, email, phone, message },
    });

    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${firstName} ${surname}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully", data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT_ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
