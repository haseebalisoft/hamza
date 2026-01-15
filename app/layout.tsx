import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hason Shok | Lead Data Engineer',
  description: 'Personal portfolio of Hason Shok, Lead / Principal Data Engineer specializing in Big Data, Lakehouse Architectures, and Real-Time Analytics.',
  generator: 'v0.dev',
  keywords: [
    'Hason Shok',
    'Data Engineer',
    'Big Data',
    'Spark',
    'Kafka',
    'Cloud Architect',
    'Portfolio'
  ],
  openGraph: {
    title: 'Hason Shok | Lead Data Engineer',
    description: 'Lead / Principal Data Engineer specializing in Big Data, Lakehouse Architectures, and Real-Time Analytics.',
    type: 'website',
    url: '#',
    siteName: 'Hason Shok Portfolio',
  },
  twitter: {
    title: 'Hason Shok | Lead Data Engineer',
    description: 'Portfolio of Hason Shok, building scalable, high-performance data platforms.',
    card: 'summary_large_image',
    site: '',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
