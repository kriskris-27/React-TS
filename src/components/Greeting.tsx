import React from 'react'

interface prop{
    name:string
}

const Greeting:React.FC<prop> = ({name}) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md text-center">
      <p className="text-xl font-semibold text-blue-800">Hello, {name}!</p>
    </div>
  )
}

export default Greeting
