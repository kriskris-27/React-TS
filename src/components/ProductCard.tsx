import React from 'react'

interface propp{
    productName:string;
    price:number | string;
}

const ProductCard = ({productName,price}:propp) => {
  return (
    <>
    <p>The product name is {productName} and the price of the product is {price}</p>

    </>
  )
}

export default ProductCard
