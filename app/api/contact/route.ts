import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /\S+@\S+\.\S+/;

function sanitize(value: string) {
  return value.replace(/[<>]/g, '').trim();
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = typeof payload.name === 'string' ? sanitize(payload.name) : '';
  const email = typeof payload.email === 'string' ? sanitize(payload.email) : '';
  const message = typeof payload.message === 'string' ? sanitize(payload.message) : '';

  if (!name || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid name, email, and message.' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!process.env.RESEND_API_KEY || !to || !from) {
    return NextResponse.json({ error: 'Contact form is not configured.' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const submissionId = crypto.randomUUID().slice(0, 8);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New Hot Take inquiry ${submissionId}`,
    text: [
      `Submission ID: ${submissionId}`,
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  });

  if (error) {
    console.error('Resend contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'Message sent successfully.' });
}
