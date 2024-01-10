// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/app/styles/globals.css'

import {ButtonCompo, RegisterCompo, LoginCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login',
  description: 'instagram clone 🌸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainClass>
          {children}
        </MainClass>
        </body>
    </html>
  )
}
