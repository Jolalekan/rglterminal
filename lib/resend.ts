import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteNotification({
  fullName,
  email,
  phone,
  company,
  body,
  serviceType,
}: {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  body: string;
  serviceType: string;
}) {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Quote Request</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
          <p><strong>Details:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${body}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          Reply to this email to respond directly to the customer.
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: `${fullName} <info@rglterminal.com>`,
      to: [process.env.GMAIL_USER!],
      replyTo: email,
      subject: `Quote Request: ${serviceType} - ${fullName}`,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Quote notification error:', error);
    return { success: false, error };
  }
}