import './globals.css'
import { Inter, Anonymous_Pro } from 'next/font/google'
import NavBar from './NavBar'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: '400'

})

const anonymous_pro = Anonymous_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anonymous_pro',
  weight: '400'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${anonymous_pro.variable} !scroll-smooth`}>
      <body>
      <NavBar />
        {children}
      </body>
    </html>
  )
}
