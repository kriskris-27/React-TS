import { useState } from 'react'


const BoolTog = () => {
    
const [show,setShow] =useState<boolean>(true);
  return (
    <>
    <button
    onClick={()=>setShow(prev=> !prev)}> {show ? "Hide" : "Show"}Message</button>
    {show && <p>Hello, React Warrior!</p>}
    </>
  )
}

export default BoolTog