import { useEffect, useState } from "react"



const useE1 = () => {

    const [time,setTime] = useState<Date>(new Date())

    useEffect(()=>{
        console.log('mounted');
        
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000)

        return  () =>{
            clearInterval(interval)
            console.log('unmounted');
            
        };
    },[])
  return (
    <>
    <h2>The Clock</h2>
    {time.toLocaleTimeString()}
    </>
  )
}

export default useE1