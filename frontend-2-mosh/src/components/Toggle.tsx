import { useEffect } from "react";

interface ToggleProps{
    toginfo:boolean;
    handleToggle:()=>void
}

const Toggle = ({toginfo,handleToggle}:ToggleProps) => {
    useEffect(()=>{
        console.log('I run on every render: mount + update.');
        
    },[toginfo])
  return (
    <>
        {toginfo && <h3>Hello react </h3>  }
        <button onClick={handleToggle}>To Toggle</button>
    </>
  )
}

export default Toggle