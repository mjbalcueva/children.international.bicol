import '@/styles/globals.css'

import type { Metadata } from 'next'
import { NextAuthProvider } from '@/providers/next-auth-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToasterProvider } from '@/providers/toaster-provider'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/shared/tailwind-indicator'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <ToasterProvider />
            <TailwindIndicator />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
