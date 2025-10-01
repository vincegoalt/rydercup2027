import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, locale } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: locale === 'es' ? 'El correo electrónico es requerido' : 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: locale === 'es' ? 'Correo electrónico inválido' : 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create contact in Resend (this will add them to your audience)
    // Note: You'll need to set up an audience in Resend first
    // For now, we'll send a notification email to the admin
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@adarelimerickgolf.com',
      to: process.env.CONTACT_EMAIL_TO || 'info@adarelimerickgolf.com',
      subject: '[Newsletter Signup] New Ryder Cup 2027 Subscriber',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #059669; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .email-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #059669; margin: 20px 0; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📧 New Newsletter Signup</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Ryder Cup 2027 Updates List</p>
              </div>
              <div class="content">
                <p><strong>A new subscriber has signed up for Ryder Cup 2027 updates!</strong></p>

                <div class="email-box">
                  <strong>Email:</strong><br>
                  <a href="mailto:${email}" style="color: #059669; font-size: 16px;">${email}</a>
                </div>

                <p><strong>Signup Details:</strong></p>
                <ul>
                  <li><strong>Language:</strong> ${locale === 'es' ? 'Spanish (ES)' : 'English (EN)'}</li>
                  <li><strong>Date:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Dublin' })}</li>
                  <li><strong>Source:</strong> adarelimerickgolf.com</li>
                </ul>

                <div class="footer">
                  <p><strong>Next Steps:</strong></p>
                  <ol>
                    <li>Add this email to your Resend audience</li>
                    <li>Send welcome email with Ryder Cup 2027 planning resources</li>
                    <li>Add to ${locale === 'es' ? 'Spanish' : 'English'} language segment for targeted content</li>
                  </ol>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: locale === 'es' ? 'Error al suscribirse' : 'Error subscribing' },
        { status: 500 }
      );
    }

    // TODO: Add to Resend Audience
    // Once you create an audience in Resend, you can use:
    // await resend.contacts.create({
    //   email: email,
    //   audienceId: 'your-audience-id',
    //   unsubscribed: false,
    // });

    return NextResponse.json(
      {
        success: true,
        message:
          locale === 'es'
            ? '¡Gracias! Estás inscrito para actualizaciones Ryder Cup 2027.'
            : 'Thanks! You\'re signed up for Ryder Cup 2027 updates.',
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
