import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
// import Greeting from './components/Greeting'
// import ProductCard from './components/ProductCard'
// import UserProfile from './components/UserProfile'
// import Counter from './components/Counter'
import Nameinput from './components/Nameinput'

const App = () => {
  return (
    <>
    <WelcomeMessage/>
    {/* <Greeting name="kris"/>
    <ProductCard productName='porsche' price='100000'/>
    <UserProfile username="kris" age={20} />
    <UserProfile username="Lewis"/> */}
    {/* <Counter/> */}
    <Nameinput/>
     </>
  )
}

export default App
