import { useMemo, useState } from 'react'

const SimExMemo = () => {
    const [number,setNumber] = useState<number>(0)
    const [theme,setTheme] = useState<boolean>(true)
    
    // const double = (()=>{
        
    //     console.log("Calculating...");
    //     return number * 2
    // })()

    const double = useMemo(()=>{
        console.log("Calculating...");
        return number * 2;
        
    },[number])

    const themeStyle = {
    backgroundColor: theme ? '#fff' : '#333',
    color: theme ? '#000' : '#fff',
    padding: '10px',
    marginTop: '20px',
  };
   return (
    < >
    <div style={themeStyle}>


    <input type='number' value={number} onChange={(e)=>setNumber(+e.target.value)}/>
    <button onClick={()=>setTheme(prev=>!prev)}>click to switch theme</button>
    <p>double {double}</p>
        </div>
    </>
  )
}

export default SimExMemo