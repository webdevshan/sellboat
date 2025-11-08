import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ExitYourBoatShare - Sell Your Boat Syndicate Share for Cash',
  description: 'Not using your boat share days? We buy boat syndicate shares for cash. No brokers, no fuss, completely confidential. Get out of your boat share today.',
  keywords: 'boat syndicate, boat share, sell boat share, exit boat syndicate, BSA, boat share exit, cash for boat share',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  )
}
