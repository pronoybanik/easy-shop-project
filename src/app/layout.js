import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import './globals.css'
import Providers from '@/providers'
import Toaster from '@/components/Toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Shop',
  description: 'Easy shop website',
}

const RootLayout = ({ children }) => {
  return (
    <html className='container w-[1400px] mx-auto' lang="en">
      <body className={inter.className}>
        <Providers>
          <div>
            <NavBar />
            {children}
            <Footer />
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout;
