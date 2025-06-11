import React from 'react'

interface custprops{
    onbtnpress:()=>void;
    children:React.ReactNode;
}

const CustomButton:React.FC<custprops> = ({onbtnpress,children}) => {
  return (
    <>
    <button className='border' onClick={onbtnpress}>{children}</button>
    </>
  )
}

export default CustomButton
