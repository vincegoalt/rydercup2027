import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to avoid build errors when env vars are not set
let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY || '');
  }
  return resend;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, locale } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: locale === 'es' ? 'Todos los campos son requeridos' : 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: locale === 'es' ? 'Correo electrónico inválido' : 'Invalid email address' },
        { status: 400 }
      );
    }

    // Subject mapping
    const subjectMap: Record<string, { en: string; es: string }> = {
      general: { en: 'General Question', es: 'Pregunta General' },
      rydercup: { en: 'Ryder Cup 2027 Planning', es: 'Planificación Ryder Cup 2027' },
      courses: { en: 'Golf Course Recommendations', es: 'Recomendaciones de Campos' },
      accommodation: { en: 'Accommodation Advice', es: 'Consejos de Alojamiento' },
      itinerary: { en: 'Custom Itinerary', es: 'Itinerario Personalizado' },
      other: { en: 'Other', es: 'Otro' },
    };

    const subjectText = subjectMap[subject]?.[locale as 'en' | 'es'] || subject;

    // Send email via Resend
    const resendClient = getResendClient();
    const { data, error } = await resendClient.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@adarelimerickgolf.com',
      to: process.env.CONTACT_EMAIL_TO || 'info@adarelimerickgolf.com',
      subject: `[Contact Form] ${subjectText} - ${name}`,
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
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #059669; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Adare Limerick Golf - Ryder Cup 2027</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subjectText}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  <p>This message was sent from the contact form on adarelimerickgolf.com</p>
                  <p>Locale: ${locale === 'es' ? 'Spanish (ES)' : 'English (EN)'}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: locale === 'es' ? 'Error al enviar el mensaje' : 'Error sending message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          locale === 'es'
            ? '¡Gracias por contactarnos! Te responderemos en 24 horas.'
            : 'Thanks for reaching out! We\'ll get back to you within 24 hours.',
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
