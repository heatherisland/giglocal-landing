import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  try {
    await Promise.all([
      // Add to Resend audience
      resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID!,
      }),
      // Notify the team
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'noreply@giglocal.co',
        to: process.env.NOTIFY_EMAIL ?? 'heatherbarryv@gmail.com',
        subject: 'New GigLocal waitlist signup',
        html: `
          <div style="background:#0d1117;color:#e5e7eb;font-family:sans-serif;padding:32px;border-radius:12px;max-width:480px">
            <h2 style="color:#14b8a6;margin-top:0">New waitlist signup</h2>
            <p><strong>${email}</strong> just joined the GigLocal waitlist.</p>
            <p style="color:#6b7280;font-size:13px">giglocal.co</p>
          </div>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
