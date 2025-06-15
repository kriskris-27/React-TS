export interface Product{
    
        id:string,
        name:string,
        price:number
    }

interface ProductProps{
    products:Product[]
}

const ProductCard:React.FC<ProductProps> = ({products}) => {
  return (
    <>
    <div>ProductCard</div>
    {products.map((product)=>(<div key={product.id}>{product.name}-{product.price}</div>))}
    
    </>
    
  )
}

export default ProductCard