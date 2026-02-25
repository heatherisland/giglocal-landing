import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GigLocal — Coming Soon',
  description: 'Connecting local music venues with talented musicians. Simple. Direct.',
  openGraph: {
    title: 'GigLocal — Find Your Sound',
    description: 'Connecting local music venues with talented musicians. Simple. Direct.',
    url: 'https://giglocal.co',
    siteName: 'GigLocal',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
