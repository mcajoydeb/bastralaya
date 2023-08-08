import React, { useContext } from 'react'
import {productCss} from "./ProductCard.style"
import Image from 'next/image'
import ProductType from '@/interface/productType';
import { CartContext } from '@/Providers/CartProvider/CartProvider';



function ProductCard({product }:{product: ProductType}) {
  const [itemCount, setItemCount] = React.useState<Number>(1);
  const cart = useContext(CartContext);
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
            
            <Image className="card-img-top" src={product.thumbnail} width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', maxHeight:300 }}  alt="..." />
           
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">{product.title}</h5>
                    
                    {product.price}
                    
                </div>
            </div>
            
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                            cart.setCartTotal(prev => prev + 1)
                        }}>Add to Cart</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard