import { ReactNode } from 'react'
import { Inter } from '@next/font/google'
import Image from 'next/image'

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
      <body>
        {children}

        <Image
          className="fixed top-0 right-0 pointer-events-none"
          src="/code.svg"
          alt=""
          width={2385}
          height={1590}
        />
      </body>
    </html>
  )
}
