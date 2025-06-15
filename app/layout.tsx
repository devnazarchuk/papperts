import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
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
          <div className="flex min-h-screen flex-col gap-0 from-[#FFF0F0] to-[#F8D4D4] dark:from-[#232323] dark:to-[#2a2a2a]">
            <Header />
            <main
              className="mx-auto grid w-full max-w-screen-2xl flex-1 place-items-center font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif]"
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
