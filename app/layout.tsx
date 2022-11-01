import { ReactNode } from 'react'
import { Inter } from '@next/font/google'

import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Jonathan Pauluze - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-neutral-900 text-white min-h-screen min-w-screen py-12 px-6 md:px-12 bg-[url('/code.svg')] bg-right-top bg-no-repeat">
        {children}
      </body>
    </html>
  )
}
