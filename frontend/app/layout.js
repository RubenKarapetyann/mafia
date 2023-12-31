import Background from '@/components/global/Background/Background'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mafia Online',
  description: 'Mafia Online by Ruben',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Background/>
      </body>
    </html>
  )
}
