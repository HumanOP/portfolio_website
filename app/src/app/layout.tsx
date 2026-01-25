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
  title: 'Divyanshu Kashyap — Product Engineer & Full Stack Developer',
  description:
    'Builder at the intersection of product, engineering, and markets. Currently exploring product management, full-stack development, and trading infrastructure. IIT Roorkee.',
  keywords: [
    'Divyanshu Kashyap',
    'Product Engineer',
    'Full Stack Developer',
    'Trading Systems',
    'IIT Roorkee',
    'Backend Developer',
    'Python',
    'TypeScript',
    'FastAPI',
    'React',
    'Next.js',
    'Docker',
    'Kubernetes',
    'Trading Infrastructure',
    'Quant Developer',
    'India',
  ],
  authors: [{ name: 'Divyanshu Kashyap', url: 'https://x.com/DivtheHuman' }],
  creator: 'Divyanshu Kashyap',
  publisher: 'Divyanshu Kashyap',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Divyanshu Kashyap — Product Engineer & Full Stack Developer',
    description:
      'Builder at the intersection of product, engineering, and markets. Trading infrastructure, full-stack development, and product management.',
    siteName: 'Divyanshu Kashyap Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Divyanshu Kashyap — Product Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyanshu Kashyap — Product Engineer & Full Stack Developer',
    description:
      'Builder at the intersection of product, engineering, and markets. Trading infrastructure, full-stack development, and product management.',
    creator: '@DivtheHuman',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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
