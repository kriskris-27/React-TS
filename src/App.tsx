import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
// import DataFetcher from './components/DataFetcher'
// import UserDetailFetcher from './components/UserDetailFetcher'
import RegistrationForm from './components/RegistrationForm'
// import Greeting from './components/Greeting'
// import ProductCard from './components/ProductCard'
// import UserProfile from './components/UserProfile'
// import Counter from './components/Counter'
// import Nameinput from './components/Nameinput'
// import CustomButton from './components/CustomButton'

const App = () => {
  return (
    <>
    <WelcomeMessage/>

    {/* <Greeting name="kris"/>
    <ProductCard productName='porsche' price='100000'/>
    <UserProfile username="kris" age={20} />
    <UserProfile username="Lewis"/> */}
    {/* <Counter/> */}
    {/* <Nameinput/> */}
    {/* <CustomButton onbtnpress={()=> alert('Button Clicked')}>Hello</CustomButton> */}
    {/* <CustomButton onbtnpress={() => console.log('Icon button pressed.')}>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Download</span>
          </CustomButton> */}

          {/* <DataFetcher/> */}

          {/* <UserDetailFetcher/> */}

          <RegistrationForm/>

     </>
  )
}

export default App
