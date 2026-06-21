import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Loi Chong Bin | Bridge & Structural Design Engineer',
  description:
    'Structural Design Engineer specializing in RC bridge design, prestressed concrete, structural optimization, and multidisciplinary project coordination. Graduate Engineer, Board of Engineers Malaysia (BEM).',
  keywords: [
    'bridge engineer Malaysia',
    'structural engineer',
    'RC bridge design',
    'prestressed concrete',
    'Pan Borneo Highway',
    'BEM graduate engineer',
    'Monash University',
    'structural design',
    'bridge widening',
    'infrastructure engineer',
  ],
  authors: [{ name: 'Loi Chong Bin', url: 'mailto:loichongbin@gmail.com' }],
  creator: 'Loi Chong Bin',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    title: 'Loi Chong Bin | Bridge & Structural Design Engineer',
    description:
      'Structural Design Engineer delivering technical excellence, cost optimization, and engineering innovation across major Malaysian infrastructure projects.',
    siteName: 'Loi Chong Bin Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loi Chong Bin | Bridge & Structural Design Engineer',
    description:
      'Structural Design Engineer specializing in RC bridge design, prestressed concrete, and multidisciplinary project coordination.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
