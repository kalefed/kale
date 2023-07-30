import './globals.css'
import { Inter, Anonymous_Pro } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const anonymous_pro = Anonymous_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anonymous_pro',
  weight: '700'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${anonymous_pro.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
