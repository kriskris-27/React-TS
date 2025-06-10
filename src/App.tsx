import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Greeting from './components/Greeting'
import ProductCard from './components/ProductCard'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <>
    <WelcomeMessage/>
    <Greeting name="kris"/>
    <ProductCard productName='porsche' price='100000'/>
    <UserProfile username="kris" age={20} />
    <UserProfile username="Lewis"/>
     </>
  )
}

export default App
