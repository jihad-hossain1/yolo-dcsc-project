
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import classNames from '@/utils/classNames'
import Toaster from '@/components/Toaster/Toaster'


const poppins = Poppins({ subsets: ['latin'],weight: ["100", "300", "400", "500", "700", "900"],variable: "--font-poppins" })

export const metadata = {
  title: 'DCSC',
  description: 'Dhaka Collage Science Club',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={classNames(poppins.variable,'font-poppins')}>
        <div className="flex min-h-screen flex-col justify-between bg-[#041551]">
            <div className=''>
            <Navbar />
              <main className="">{children}</main>
            </div>
            <Footer />
        </div>
        <Toaster />
        </body>
    </html>
  )
}
