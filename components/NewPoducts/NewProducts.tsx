"use client"
import React, { ReactNode } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react"; 
import ProductType from "@/interface/productType";

const NewProducts =(): ReactNode =>{
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        (async () => {
            let response    = await fetch("http://localhost:3000/items");
            let {products}  = await response.json()
            setProducts(products);
        })()
    },[])
    
    return(
        <>
            <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {/* {new Array(12).fill(1).map((item, index) => <ProductCard key={index}></ProductCard>)}               */}
                            {products?.slice(0,12).map((item: ProductType, index)  => <ProductCard key={index} product={item}/>)}              
                        </div>
                    </div>
            </section>
        </>
    )
}

export default NewProducts