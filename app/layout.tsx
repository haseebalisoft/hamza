import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Afshae Re | Senior Data Engineer',
  description: 'Personal portfolio of Afshae Re, Senior Data Engineer specializing in Big Data, Lakehouse Architectures, and Real-Time Analytics.',
  generator: 'v0.dev',
  keywords: [
    'Afshae Re',
    'Data Engineer',
    'Big Data',
    'Spark',
    'Kafka',
    'Cloud Architect',
    'Portfolio'
  ],
  openGraph: {
    title: 'Afshae Re | Senior Data Engineer',
    description: 'Senior Data Engineer specializing in Big Data, Lakehouse Architectures, and Real-Time Analytics.',
    type: 'website',
    url: '#',
    siteName: 'Afshae Re Portfolio',
  },
  twitter: {
    title: 'Afshae Re | Senior Data Engineer',
    description: 'Portfolio of Afshae Re, building scalable, high-performance data platforms.',
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
