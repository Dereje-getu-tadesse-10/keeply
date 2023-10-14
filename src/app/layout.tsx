import './globals.css'
import type { Metadata } from 'next'
import { Gabarito } from "next/font/google"
import { NextAuthProvider } from './provider'
import { Header } from '$/components/common'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={gabarito.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
