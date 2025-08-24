import {  useMemo, useState } from "react"

 
const Usememoex = () => {
    const [inp,setInput] = useState<string>('');
    const [theme,setTheme] = useState<boolean>(false);
    const fruits = [
  "Apple", "Banana", "Mango", "Orange", "Pineapple", "Papaya", "Strawberry",
  "Blueberry", "Raspberry", "Cherry", "Grapes", "Watermelon", "Peach",
  "Lemon", "Lime", "Kiwi", "Coconut", "Guava", "Pomegranate", "Fig"
];

    const filteredFruits = useMemo(
        ()=>{
        console.log("function invoked...");
        
        const found=fruits.filter(f=>f.toLowerCase().includes(inp.toLowerCase()))
        if (found.length> 0)
            return found 
        else
        return ["Fruit not found :("]
    
        },[inp]
    )
    
    const themeStyle = {
    backgroundColor: theme ? '#fff' : '#333',
    color: theme ? '#000' : '#fff',
    padding: '10px',
    marginTop: '20px',
  };
    
  return (
    <>
    <div style={themeStyle}>
    <h3>EX-3</h3>
    <input type="text" value={inp} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={()=>setTheme(prev=>!prev)}>Click to switch theme</button>
    <p> {filteredFruits.map((f,index)=><li key={index}>
    {f}
    </li>) }</p>
    </div>
    </>
  )
}

export default Usememoex