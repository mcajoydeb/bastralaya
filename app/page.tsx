"use client"
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import Carusal from '@/components/Carusal/Carusal'
import Member from '@/components/Members/Member'
import NewProduct from '@/components/NewPoducts/NewProducts'
import CommonComponent from '@/components/CommonComponent/CommonComponent'
import { useContext } from 'react'
import { CartContext } from '@/Providers/CartProvider/CartProvider'

export default function Home() {
  
  return (<>
      
      <main className="">
      {/* <Carusal></Carusal> */}

        <NewProduct/>
        <Member/>
        <CommonComponent/>        
      </main>
      </>
    
  )
}
