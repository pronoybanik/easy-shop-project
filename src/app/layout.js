import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Shop',
  description: 'Easy shop website',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout;
