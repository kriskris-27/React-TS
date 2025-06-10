import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Greeting from './components/Greeting'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <>
    <WelcomeMessage/>
    <Greeting name="kris"/>
    <ProductCard productName='porsche' price='100000'/>
    </>
  )
}

export default App
