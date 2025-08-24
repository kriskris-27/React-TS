import { useEffect, useState } from "react"


const DbncuseE4 = () => {
    const [result ,setResult] = useState<string>("");
    const [query,setQuery] = useState<string>("");
    
    useEffect(()=>{
        if (!query) 
        {
            setResult('')
            return;
        }
        
        const timeout=setTimeout(()=>{
            setResult(query)
        },500)

        return ()=>
            clearTimeout(timeout);

        
    }
    ,[query])

  return (
    
    <>
    <h2>Debounce</h2>
    <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
    <p>{result ?? "Loading..."}</p>
    </>
  )
}

export default DbncuseE4