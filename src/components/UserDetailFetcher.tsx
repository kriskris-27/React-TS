import React, { useEffect, useState } from 'react'

interface Udetail{
    userId:number;
    name:string;
    email:string
}

const UserDetailFetcher = () => {
    const [data,setData] = useState<Udetail|null>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string|null>(null)
    const [userId,setUserId] = useState<number>(1)

    useEffect(()=>{
        const fetchdata=async()=>{
            
            setLoading(true)
            setError(null)
            try{
                const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

                if(!resp.ok){
                    throw new Error(`HTTP error! status: ${resp.status}`)
                }

                const result:Udetail = await resp.json();

                setData(result)

            }catch(err){
                if (err instanceof Error){
                    setError(err.message)
                }
                else{
                    setError("Unknown error")
                }

            }finally{
                setLoading(false)
            }
            
        }
        fetchdata();
    },[userId])
  return (
    <>
    <input type='number' value={userId} onChange={(e)=>setUserId(e.target.valueAsNumber || 1)}/>
    {loading && <p>Loading...</p>}
    {error && (<p>Error:{error}</p>)}
    {!loading && !error && data && (<p>Name: {data.name} Email: {data.email}</p>)}
    
    </>
  )
}

export default UserDetailFetcher
