import { useState } from "react"

interface Item{
    id:number,
    name:string
}

const Formrev1 = () => {


    const [items,setItems] = useState<Item[]>([])
    const [add,setAdd] = useState<string>("")
    const [passid,setPassid] = useState<number | null>(null)
    const [passname,setPassname] = useState<string>("")
    const handleAdd = (e:React.FormEvent) =>{
        e.preventDefault()
        const newtoadd={
            id:Date.now(),
            name:add
        }
        setItems([...items,newtoadd])
           setAdd("")
    }

    const handleDelete = (id:number) =>{
        setItems(currentitmes => currentitmes.filter((item)=>item.id!==id))
    }

    const handleEdit = (id:number,name:string)=>{
        setPassid(id);
        setPassname(name);
    }

    const handleSave = (id:number) =>{
        setItems(currentitems => currentitems.map((item)=>item.id===id?{...item,name:passname}:item ))
        setPassid(null);
        setPassname("")
    }
    const handleCancel = () =>{
        setPassid(null);
        setPassname("")
    }
    
    
  return (
    <>
    <h3>Form rev - 1</h3>
    <form action="" method="POST" onSubmit={handleAdd}>
        <label htmlFor="inpbar">Enter the task:</label>
        <input type="text" id="inpbar" value={add}  onChange={(e)=>{setAdd(e.target.value)}}/>
        <button type="submit">Add</button>
    </form>
     <ul>
      {items.map(item => (
        <li key={item.id}>
            {passid === item.id ?
            (
                <>
                <input type="text" value={passname} onChange={(e)=>(setPassname(e.target.value))}/>
                <button onClick={()=>{handleSave(item.id)}}>Saven </button>
                <button onClick={handleCancel}>Cancel</button>
                </>
            )
            :
            (
                <>
                {item.name}
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                <button onClick={()=>handleEdit(item.id,item.name)}>Edit</button>
                </>
            )
        } 
            
        </li>
        
      ))}
    </ul>
    </>
  )
}

export default Formrev1