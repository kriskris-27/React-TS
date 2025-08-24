import { useEffect, useState } from "react"

interface User{
    name:string
}

const AsyncE3 = () => {
    const [user,setUser] = useState<User | null>(null);
    
    useEffect(()=>{
        const controller = new AbortController();

        const fetchUser = async()=>{

            try{
                const res= await fetch("https://jsonplaceholder.typicode.com/users/2",{
                    signal:controller.signal,
                });

                if(!res.ok) throw new Error("Network response not okay")

                const data= await res.json()
                setUser(data)
            }catch(err){
                console.error(err)
        }
        }
        fetchUser();
        return ()=> {controller.abort()}
    },[])

  return (
    <>
    <h2>Async</h2>
    <p>{user?.name ?? "Loading..."}</p>
    </>

  )
}

export default AsyncE3