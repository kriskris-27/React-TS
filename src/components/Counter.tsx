import React, { useState } from 'react'



const Counter = () => {
    const [value,setValue] = useState<number>(0)
  return (
    <>
    <p>value : {value}</p>
    <button className='border' onClick={()=>setValue(value+1)}>Increment</button>
    <button className='border' onClick={()=>setValue(value-1)}>Decrement</button>
    </>
  )
}

export default Counter
