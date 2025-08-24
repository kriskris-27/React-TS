import { useEffect, useRef, useState } from "react"

interface Task{
id:number,
text:string
}

const Formrev2 = () => {
    const [items,setItems] = useState<Task[]>([])
  const [add,setAdd] = useState<string>("");
  
  const [mkid,setMkid] =useState<number | null> (null);
  const [mval,setMval] = useState<string>("");

const inpref = useRef<HTMLInputElement>(null);
useEffect(()=>{
    if(mkid !== null && inpref.current){
        inpref.current.focus()
    }
},[mkid])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(!add.trim()) return
    const obj={
        id:Date.now(),
        text:add
    }
    setItems([...items,obj])
    setAdd("")

  }

  const handleClick = (id:number) =>{
     setItems(currentitems => currentitems.filter((item)=>item.id!==id))
  }

    const handleEdit=(id:number) =>{
        setMkid(id);
    }

    const handleSave = (id:number) =>{
        setItems(current => current.map((item)=> item.id === id ? {...item,text:mval}: item))
        setMkid(null);
        setMval("")
    }

    const handleCancel =()=>{
        setMkid(null);
        setMval("")
    }
  return (
    <>
        <h2>Formrev2</h2>
        <form action="" method="POST" onSubmit={handleAdd}>
            <label htmlFor="val">Enter the task</label>
            <input type="text" id="val" value={add} onChange={(e)=>(setAdd(e.target.value))}/>
            <button type="submit">ADD</button>
        </form>
        <ul>{
            items.map((item)=>(
            <li key={item.id}>
            {mkid === item.id ? (
                <>
                <input type="text" ref={inpref} value={mval} onChange={(e)=>setMval(e.target.value)}/>
                <button onClick={()=>{handleSave(item.id)}}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
                </>
            ):(
                <>
                {item.text}
            <button onClick={()=>{handleClick(item.id)}} >Delete</button>
            <button onClick={()=>{handleEdit(item.id)}}>Edit</button>
            </>
            )}
             </li>))
        }
        </ul>

    </>
  )
}

export default Formrev2