import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description:
    'Personal portfolio showcasing projects, experience, and skills as a Product Engineer and Full Stack Developer.',
  keywords: [
    'Portfolio',
    'Full Stack Developer',
    'Product Engineer',
    'React',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: 'HumanOP' }],
  creator: 'HumanOP',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}
      >
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
