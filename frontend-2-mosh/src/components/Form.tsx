import { useState } from "react"

interface Item {
    id:number,
    name:string
}

const Form = () => {
    const [items,setItems] = useState<Item[]>([])

    const [add ,setAdd] =useState<string>("")

    const [editing,setEditing] = useState<number|null>(null);

    const [evalue,setEvalue] = useState<string>("")

    const handleDelete=(id:number)=>{
        setItems(currentItems=>currentItems.filter((item)=> item.id !== id))
        
    }

    const handleEdit=(id:number,name:string)=>{
        setEditing(id);
        setEvalue(name);
    }

    const handleCancel=()=>{
        setEditing(null);
        setEvalue("");
    }

    const handleSave=(id:number)=>{
        setItems(currentItems => currentItems.map(item=>item.id === id? {...item,name:evalue}:item))
        setEditing(null);
        setEvalue("")
    }

    
    const handleAdd=(e:React.FormEvent)=>{
        e.preventDefault();
        if(!add.trim()) return;
        
         const newtoadd={
            id:Date.now(),
            name:add,
         }
         setItems([...items,newtoadd]);
         setAdd(""); 
    }

  return (
    <>
    <form action="
    " onSubmit={handleAdd} method="POST">
        <label htmlFor="val" >Enter value</label>
        <input type="text" id="val" value={add} onChange={(e)=>(setAdd(e.target.value))}/>
        <button type="submit" >Add</button>
    </form>
    <ul>
        {items.map(item=> <li key={item.id}>
            {editing === item.id ? (
                <>
                <input type="text" value={evalue} onChange={(e)=>(setEvalue(e.target.value))} />
                <button onClick={()=>handleSave(item.id)} >Save</button>
                <button onClick={handleCancel}>Cancel</button>

                </>
            ):(
                <>
                {item.name}
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                <button onClick={()=>handleEdit(item.id,item.name)}>Update</button>
                </>
            )}
            </li>
        )}
    </ul>
    
    </>
  )
}

export default Form
