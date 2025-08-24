import { useState } from "react"
import Child from "./Child"

const Parent = () => {

    const [cnt,setCnt]= useState<number>(0)

    const handleClick=()=>{
        setCnt((cnt)=> cnt+1)
    }

  return (
    <>
    <h1>Parent Counter : {cnt}</h1>
    <Child Incre={handleClick}/>
    </>
  )
}

export default Parent