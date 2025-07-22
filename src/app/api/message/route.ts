import { Resend } from 'resend';

import ContactTemplate from '@/components/email/contact-template';
import { ContactFormSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validationResult = ContactFormSchema.safeParse(data);

    if (!validationResult.success) {
      return Response.json(
        { success: false, message: 'Invalid input' },
        {
          status: 400,
        },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY ?? '');

    const { data: emailData, error } = await resend.emails.send({
      from: process.env.EMAIL_DOMAIN ?? 'onboarding@resend.dev',
      to: process.env.USER_EMAIL ?? '',
      subject: 'Portfolio Contact Form Submission',
      react: ContactTemplate({
        name: validationResult.data.name,
        message: validationResult.data.message,
        email: validationResult.data.email,
      }),
    });

    if (error) {
      return Response.json(
        { success: false, message: 'Failed to send email', error },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      { success: true, message: 'Message sent successfully!', emailData },
      {
        status: 200,
      },
    );
  } catch (e) {
    return Response.json(
      { success: false, message: e instanceof Error ? e.message : 'Something went wrong' },
      {
        status: 500,
      },
    );
  }
}
