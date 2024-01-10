// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login',
  description: 'instagram clone 🌸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
