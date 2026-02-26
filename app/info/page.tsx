import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GigLocal — How It Works',
  description: 'GigLocal connects local venues with local musicians. No agents, no guesswork. $5 to connect.',
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-teal-500 text-[#0d1117] flex items-center justify-center font-bold text-sm">
        {n}
      </div>
      <div>
        <h5 className="font-semibold text-gray-100 mb-1">{title}</h5>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ValueCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-700/60 bg-gray-800/40 p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-bold text-gray-100 mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-gray-700/60 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-gray-100 font-medium hover:bg-gray-800/60 transition-colors list-none">
        {q}
        <span className="ml-4 text-teal-400 text-xl font-light group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
      </summary>
      <div className="px-5 pb-5 pt-3 text-gray-400 text-sm leading-relaxed border-t border-gray-700/60">
        {a}
      </div>
    </details>
  )
}

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100">

      {/* Background glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal-500 opacity-[0.04] blur-[140px] pointer-events-none"
        aria-hidden
      />

      {/* Minimal header */}
      <header className="border-b border-gray-800/60 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Image
              src="/giglocal-hero.png"
              alt="GigLocal — Find Your Sound"
              width={160}
              height={46}
              priority
            />
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-5 leading-tight">
            Find Your Sound.<br />Fill Your Stage.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            GigLocal connects local venues with local musicians — no agents, no cold emails, no guesswork.
            Both sides pay a flat $5 to unlock a real connection.
          </p>
        </section>

        {/* How It Works */}
        <section className="py-12 border-t border-gray-800/60">
          <h2 className="text-2xl font-bold text-center text-gray-100 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-teal-400 font-semibold uppercase tracking-wider text-xs mb-6">For Venues</h3>
              <div className="space-y-7">
                <Step n={1} title="Create your venue profile"
                  desc="Sign up free and tell musicians about your space — your location, type, capacity, and what kind of acts you book. Takes five minutes." />
                <Step n={2} title="Search verified musicians"
                  desc="Browse local talent by genre, city, or keyword. Every artist on GigLocal has been reviewed before appearing in search — no fakes, no ghost accounts." />
                <Step n={3} title="Connect for $5"
                  desc="Pay $5 to send a connection request with a personal note. If they accept, you both get full contact info and direct messaging — no middleman." />
              </div>
            </div>

            <div>
              <h3 className="text-teal-400 font-semibold uppercase tracking-wider text-xs mb-6">For Musicians</h3>
              <div className="space-y-7">
                <Step n={1} title="Create your artist profile"
                  desc="Add your band name, bio, genres, and location. Link your Spotify, Instagram, or YouTube. Upload a performance video. Show venues your best work before they reach out." />
                <Step n={2} title="Get verified"
                  desc="Link your Spotify artist page for instant verification, or submit social links and a performance video for a quick manual review. Verified artists appear in venue searches." />
                <Step n={3} title="Respond to requests"
                  desc="When a venue wants to connect, you'll get an email. Review their info — if it's a fit, accept and pay $5 to unlock messaging and share contact details. You have 7 days to respond." />
              </div>
            </div>

          </div>
        </section>

        {/* Why GigLocal */}
        <section className="py-12 border-t border-gray-800/60">
          <h2 className="text-2xl font-bold text-center text-gray-100 mb-3">Built for the local scene.</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Not the algorithm.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <ValueCard icon="🎸" title="Verified Artists Only"
              desc="Every musician in search has been reviewed. Spotify-linked artists verify instantly. Others are reviewed within a few days. No bots, no fakes." />
            <ValueCard icon="💰" title="Both Sides Pay $5"
              desc="The $5/$5 model keeps things serious. Venues can't blast every musician for free, and musicians only field requests from people who mean it." />
            <ValueCard icon="💬" title="Direct Messaging"
              desc="Once you're both unlocked, you talk directly — full contact info on both sides, clean message thread, no platform in the middle." />
            <ValueCard icon="🚫" title="No Subscriptions"
              desc="No monthly fees. No commission on bookings. Pay $5 when you want to connect. That's it." />
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 border-t border-gray-800/60">
          <h2 className="text-2xl font-bold text-center text-gray-100 mb-3">Simple pricing.</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Transparent. No surprises.</p>
          <div className="rounded-xl border border-gray-700/60 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700/60 bg-gray-800/40">
                  <th className="text-left py-3 px-5 text-gray-500 font-medium w-1/2"></th>
                  <th className="text-center py-3 px-4 text-teal-400 font-semibold">Venues</th>
                  <th className="text-center py-3 px-4 text-teal-400 font-semibold">Musicians</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {[
                  ['Create a profile', '✓ Free', '✓ Free'],
                  ['Browse / be discovered', '✓ Free', '✓ Free'],
                  ['Send or accept a connection', '$5 one-time', '$5 one-time'],
                  ['Messaging after connection', '✓ Included', '✓ Included'],
                  ['Monthly subscription', '✗ None', '✗ None'],
                  ['Commission on bookings', '✗ None', '✗ None'],
                ].map(([feature, venue, musician]) => (
                  <tr key={feature} className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-3 px-5 text-gray-300">{feature}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{venue}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{musician}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            Payments processed securely via Stripe. GigLocal never stores your card details.
          </p>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-gray-800/60">
          <h2 className="text-2xl font-bold text-center text-gray-100 mb-10">Common questions</h2>
          <div className="space-y-3">
            <FaqItem
              q="Do I need a credit card to sign up?"
              a="No — creating a profile is completely free for both venues and musicians. You only pay when you choose to unlock a specific connection." />
            <FaqItem
              q="What does 'verified' mean for musicians?"
              a="It means we've confirmed you're a real, active artist — either through your Spotify artist page (instant) or by reviewing your social presence and a performance video. Unverified musicians can create a profile but won't appear in venue search results until verified." />
            <FaqItem
              q="What if a musician doesn't respond to my request?"
              a="Connection requests expire after 7 days if the musician doesn't respond. You'll be notified and can reach out to other artists — the platform makes it easy to browse and try again." />
            <FaqItem
              q="What if a musician declines my request?"
              a="You'll be notified right away. There are plenty of artists on GigLocal — use the search to find someone who's a better fit for your space." />
            <FaqItem
              q="Can I cancel or close my account?"
              a="Yes, at any time. Contact us through giglocal.co and we'll take care of it." />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center border-t border-gray-800/60">
          <h2 className="text-3xl font-bold text-gray-100 mb-3">Your next gig starts here.</h2>
          <p className="text-gray-400 mb-8">Free to join. Only pay when you&apos;re ready to connect.</p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-700 bg-teal-950 text-teal-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Launching soon — join the waitlist at giglocal.co
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/?type=venue"
              className="px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-[#0d1117] font-bold border border-gray-700 transition-colors"
            >
              I&apos;m a Venue Manager
            </Link>
            <Link
              href="/?type=musician"
              className="px-8 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-teal-400 font-medium border border-teal-800 transition-colors"
            >
              I&apos;m a Musician
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 py-6 text-center text-gray-700 text-xs">
        © {new Date().getFullYear()} GigLocal by NerdJoy LLC. All rights reserved.
      </footer>

    </div>
  )
}
