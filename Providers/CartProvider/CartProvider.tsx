"use client"
import React, { ReactNode, useContext, createContext } from 'react'

const CartContext = createContext({});
function CartProvider({children}:{children: ReactNode}) {
    const [cartTotal,setCartTotal] = React.useState(0);
  return (
    <CartContext.Provider value ={{cartTotal,setCartTotal}}>{children}</CartContext.Provider>
  )
}

export {CartContext,CartProvider}