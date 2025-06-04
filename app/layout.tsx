import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import { cn } from '@/lib/utils'

import Footer from './components/Footer'
import Header from './components/Header/Header'

export const metadata: Metadata = {
  title: 'Papperts',
  description: 'Fresh, artisanal baked goods crafted with love.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="canonical" href="https://www.papperts.vercel.app/" />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-[#FDEEEE] font-['SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif'] text-[#3A3A3A] antialiased transition-colors duration-200 dark:bg-[#181818] dark:text-[#FFF5E1]",
          'overflow-x-hidden',
        )}
        style={{
          fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 400,
          fontStyle: 'normal',
          fontVariationSettings: '"wdth" 90',
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Global flex column layout, no horizontal scroll, mobile-first spacing */}
          <div className="flex min-h-screen flex-col gap-0 bg-gradient-to-br from-[#FFF0F0] to-[#F8D4D4] dark:from-[#232323] dark:to-[#2a2a2a]">
            <Header />
            <main
              className="mx-auto grid w-full max-w-screen-2xl flex-1 place-items-center py-6 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] md:py-10"
              aria-label="Main content"
              tabIndex={-1}
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        {/* Vercel Speed Insights for performance monitoring */}
        <SpeedInsights />
      </body>
    </html>
  )
}
