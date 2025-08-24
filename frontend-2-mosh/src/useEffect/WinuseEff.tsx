import { useEffect, useState } from "react"

const WinuseEff = () => {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight]  = useState(window.innerHeight);

    useEffect(()=>{
        const handleRzwid = ()=> setWidth(window.innerWidth);
        const hanldeRzhgt = ()=> setHeight(window.innerHeight);

        window.addEventListener('resize',handleRzwid);
        window.addEventListener('resize',hanldeRzhgt)

        return ()=>{
            window.removeEventListener('resize',handleRzwid)
            window.removeEventListener('resize',hanldeRzhgt)
        }
    },[])


  return (
    <>
    <h2>The actual width and height is {width}  /  {height}</h2>
    </>
  )
}

export default WinuseEff