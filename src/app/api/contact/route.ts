import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/lib/contact-schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to the business
    await transporter.sendMail({
      from: `"Msoco Rockers Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `New Inquiry: ${data.ceremonyType.toUpperCase()} — ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A1A1A; padding: 24px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 18px; letter-spacing: 4px;">
              MSOCO ROCKERS — NEW INQUIRY
            </h1>
          </div>
          <div style="padding: 32px; background: #FDFCF0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Name</td>
                <td style="padding: 8px 0; font-weight: bold;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Phone</td>
                <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Ceremony</td>
                <td style="padding: 8px 0;">${data.ceremonyType}</td>
              </tr>
              ${data.date ? `<tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Date</td>
                <td style="padding: 8px 0;">${data.date}</td>
              </tr>` : ''}
              ${data.venue ? `<tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Venue</td>
                <td style="padding: 8px 0;">${data.venue}</td>
              </tr>` : ''}
              ${data.package ? `<tr>
                <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Package</td>
                <td style="padding: 8px 0;">${data.package}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border-left: 3px solid #D4AF37;">
              <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div style="background: #1A1A1A; padding: 16px; text-align: center;">
            <p style="color: #666; font-size: 10px; margin: 0; letter-spacing: 2px;">
              SENT FROM MSOCOROCKERS.CO.ZA
            </p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the client
    await transporter.sendMail({
      from: `"Msoco Rockers Productions" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: 'Thank you for your inquiry — Msoco Rockers Productions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A1A1A; padding: 24px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 18px; letter-spacing: 4px;">
              MSOCO ROCKERS PRODUCTIONS
            </h1>
          </div>
          <div style="padding: 32px; background: #FDFCF0;">
            <h2 style="color: #1A1A1A; margin: 0 0 16px;">Thank you, ${data.name}.</h2>
            <p style="color: #444; line-height: 1.8;">
              We have received your inquiry and Zakes will be in touch within 24 hours to discuss your ${data.ceremonyType === 'both' ? '2-day union' : data.ceremonyType} requirements.
            </p>
            <p style="color: #444; line-height: 1.8;">
              In the meantime, feel free to browse our <a href="https://www.msocorockers.co.za/weddings/gallery" style="color: #D4AF37;">gallery</a> or call us directly at <strong>+27 72 595 9977</strong>.
            </p>
            <div style="margin-top: 24px; padding: 16px; background: white; border-left: 3px solid #D4AF37;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                KwaZulu-Natal's Premier Production House<br>
                Heirloom Quality. Durban Proud.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Contact API] Error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data', details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
