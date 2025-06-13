import React, { useEffect, useState } from 'react'

interface Outp{
    id:number;
    title:string;
}

const DebouncedSearchInput = () => {
    const [svalue,setSvalue] = useState<string> ('');
    const [delaydebounce,setDelaydebounce]=useState<string | null>(null);
    const [debounceres,setDebouceres] = useState<Outp[] | null>([])
    const [loader,setLoader] = useState<boolean>()
    const [error,setError] = useState<string | null>(null)
    
    useEffect(()=>{
        
        const timerId = setTimeout(()=>{
            setDelaydebounce(svalue) ;
           },500)

           return()=>{
            clearTimeout(timerId)
           }
    },[svalue])


    useEffect(()=>{
        const delayfetch= async()=>{
            if(svalue===''){
                setDebouceres([])
            }
            if (!delaydebounce) return;
            setDebouceres([])
            setLoader(true)
            setError(null)
            try{
                console.log("entered try")

                const resp=await fetch(`https://jsonplaceholder.typicode.com/posts?q=${delaydebounce}`)

                if(!resp.ok){
                    throw new Error(`HTTP error! status ${resp.status}`)
                }

                const res: Outp[]=await resp.json()
                console.log(res);

            
                setDebouceres(res)

            }
            catch(err){
                if(err instanceof Error){
                    setError(err.message)
                }else{
                    setError('unknown error!')
                }

            }finally{
                setLoader(false)
            }
        }
        delayfetch();
    },[delaydebounce])
    
  return (
    <>
    <input 
        className='border-gray-400 border m-4' 
        type='text' 
        value={svalue} 
        onChange={(e)=>{setSvalue(e.target.value)}}
    />
    <p>Results for: {loader ? "Loading..." : delaydebounce}</p>
    {!loader && debounceres?.length===0 && (
        <p>No results found for {delaydebounce}</p>
    )} 
    <ul>
        {debounceres && debounceres.map((post:Outp) => (
            <li key={post.id}> {post.title}</li>
        ))}
        
    </ul>

    
    </>
  )
}

export default DebouncedSearchInput
