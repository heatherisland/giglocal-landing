import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const resend = getResend()

  try {
    // Add to Resend audience if configured
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      })
    }

    // Notify the team
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'noreply@giglocal.co',
      to: process.env.NOTIFY_EMAIL ?? 'heatherbarryv@gmail.com',
      subject: `New GigLocal waitlist signup: ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;background:#0d1117;color:#e5e7eb;border-radius:12px">
          <h2 style="color:#14b8a6;margin-top:0">New GigLocal Waitlist Signup</h2>
          <p style="color:#9ca3af;margin:0">Someone just joined the waitlist:</p>
          <p style="font-size:18px;font-weight:600;margin:16px 0;color:#fff">${email}</p>
          <hr style="border-color:#374151;margin:20px 0" />
          <p style="color:#4b5563;font-size:12px;margin:0">GigLocal &mdash; giglocal.co</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
