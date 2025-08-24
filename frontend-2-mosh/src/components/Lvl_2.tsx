import { useState } from "react"

const Lvl_2 = () => {
    const [name,setName]=useState<string>('');
    const [email,setEmail] =useState<string>('');
    const [error ,setError] =useState<string>('');
   
    const handleClick=(e: React.FormEvent)=>{
        e.preventDefault();
        setError('');

        if(!name.trim() || !email.trim()){
            setError('Both fields are required');
            return;
        }
        console.log({name,email});
        setName('');
        setEmail('');
    }
 
  return (
    <>
    <form onSubmit={handleClick}>
        <input type="text"  value={name} onChange={(e)=>(setName(e.target.value))}/>
        
        <input type="text"  value={email} onChange={(e)=>(setEmail(e.target.value))}/>


        <button type="submit" >Submit</button>
        {error && <p style={{color:'red'}}>{error}</p>}
        
    </form>
    </>
  )
}

export default Lvl_2