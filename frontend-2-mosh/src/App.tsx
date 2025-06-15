import ProductCard from "./components/ProductCard";
import Todolist from "./components/Todolist"



export const App = () => {
    const todos = ['Buy milk', 'Finish homework', 'Read a book'];
  const products = [
  { id: '1', name: 'iPhone', price: 999 },
  { id: '2', name: 'AirPods', price: 199 },
  { id: '3', name: 'MacBook', price: 1999 },
];


  return (
    <>
    <Todolist todoarr={todos}/>
    <ProductCard products={products}/>
    </>
  )
}
