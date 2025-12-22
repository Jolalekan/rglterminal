
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReplyEmail({
  to,
  subject,
  body,
  originalMessage,
}: {
  to: string;
  subject: string;
  body: string;
  originalMessage?: string;
}) {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="padding: 20px;">
          ${body.split('\n').map((line: string) => `<p style="margin: 10px 0;">${line}</p>`).join('')}
        </div>
        
        ${originalMessage ? `
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px; margin-bottom: 10px;">Original message:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #4CAF50; border-radius: 4px;">
              <p style="color: #333; white-space: pre-wrap; margin: 0;">${originalMessage}</p>
            </div>
          </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p style="margin: 5px 0;"><strong>RGL Terminal Logistics</strong></p>
          <p style="margin: 5px 0;">Email: info@rglterminal.com</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'RGL Terminal <info@rglterminal.com>',
      to: [to],
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error };
  }
}

// For contact form notifications to admin
export async function sendContactNotification({
  firstName,
  surname,
  email,
  phone,
  message,
}: {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${firstName} ${surname}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          Reply to this email to respond directly to the customer.
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: `${firstName} ${surname} <info@rglterminal.com>`,
      to: [process.env.GMAIL_USER!], // Your email to receive notifications
      replyTo: email, // Customer's email
      subject: `New Contact: ${firstName} ${surname}`,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error };
  }
}