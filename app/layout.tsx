import type { Metadata, Viewport } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { LangProvider } from '@/context/LangContext'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ACS — Avulus Cyber Space | Москва',
  description:
    'Приватные игровые комнаты, неоновый ресторан и пространство для отдыха в центре Москвы. Бронирование через Telegram или по телефону.',
  keywords: ['ACS', 'Avulus Cyber Space', 'киберпространство', 'игровые комнаты', 'ресторан', 'Москва'],
  openGraph: {
    title: 'ACS — Avulus Cyber Space',
    description: 'Private gaming rooms, restaurant & lounge in the heart of Moscow.',
    siteName: 'ACS',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08080e',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
