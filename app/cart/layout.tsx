import Header from '@/components/Header/Header'


import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CREOATE - Wholesale Marketplace for Independent Brands',
  description: 'Generated by create next app',
}



export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
        <h1>This is cart layout</h1>
        {children}
    </>

  )
}


