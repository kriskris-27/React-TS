import { useState } from "react"

const UserStatusDis = () => {
    const [isloggedin,setIsloggedin] =useState<boolean>(false);
    const [isloading,setIsloading]=useState<boolean>(false);
    const [username,setUsername] = useState<string>('');

    const handlein=()=>{
        console.log("in");
        
        setIsloading(true)
        setTimeout(()=>{
            setIsloading(false)
            setIsloggedin(true)
            setUsername('Alice')
        },2000)
    }   
    const handleout = () =>{
            
            setIsloggedin(false)
            setUsername('')

            setIsloading(false)
    }   

  return (

    
    <>
    
    {isloading ? (<p>Checking status...</p>) :
    
    ( 
        <>
        {!isloggedin && (<button onClick={handlein}>Log In</button>)} 
    {isloggedin && (<button onClick={handleout}>Log Out</button>)}
    
    
      

    {isloggedin ? (<h3>Welcome,{username}! You are currently logged in</h3>) : (<p>"You are currently logged out."</p>)}
    
        </>
    )
}

    </>
  )
}

export default UserStatusDis
