import { useState } from "react"


const Nameinput = () => {
    const [inp,setInp] =useState<string>('')
  return (
    <>
    
    <input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}}/>
    <p>{inp}</p>    
    </>
  )
}

export default Nameinput
