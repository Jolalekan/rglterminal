import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { to, subject, body, originalMessage } = await req.json();

    // Create transporter with your email service
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email template
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="padding: 20px;">
      ${body.split('\n').map((line: string) => `<p>${line}</p>`).join('')}
    </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; margin-bottom: 10px;">Original message:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #007bff;">
            <p style="color: #333; white-space: pre-wrap;">${originalMessage}</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM, // Your business email
      to,
      subject,
      text: body,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}