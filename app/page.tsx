'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      } else {
        setStatus('success')
        setMessage("You're on the list! We'll be in touch when GigLocal launches.")
        setEmail('')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0d1117] flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* Background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500 opacity-[0.06] blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-orange-500 opacity-[0.05] blur-[100px] pointer-events-none"
        aria-hidden
      />

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/giglocal-hero.png"
            alt="GigLocal — Find Your Sound"
            width={480}
            height={137}
            priority
            style={{ filter: 'drop-shadow(0 0 28px rgba(20, 184, 166, 0.35))' }}
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Connecting local music venues with talented musicians.<br />
          <span className="text-gray-500">Simple. Direct. $5 to connect.</span>
        </p>

        {/* Coming soon badge */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-700 bg-teal-950 text-teal-400 text-sm font-medium animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Coming Soon
          </span>
        </div>

        {/* Signup form */}
        {status === 'success' ? (
          <div className="w-full rounded-xl border border-teal-700 bg-teal-950/40 px-6 py-5 text-teal-300 text-sm">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold border border-gray-700 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining…' : 'Get Early Access'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-400 text-sm">{message}</p>
        )}

        <p className="mt-4 text-gray-600 text-xs">
          No spam. Just a note when we launch.
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-700 text-xs">
        © {new Date().getFullYear()} GigLocal by NerdJoy LLC
      </footer>
    </main>
  )
}
