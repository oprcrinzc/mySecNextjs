import { Inter } from 'next/font/google'
import '/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

import {ButtonCompo, RegisterCompo, LoginCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
