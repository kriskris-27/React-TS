import type Data from "../types/Todotype"
import { Tododata } from "../services/Tododata"
import { useState } from "react"



export  const Todomain = () => {
    const [todos , setTodos] = useState<Data[]>(Tododata);
    const [inp,setInp] = useState<string>("");
    const [editingId,setEditingId]  = useState<number>();
    const [edittext,setEdittext] = useState<string>("");

    const toggletodo =(id:number)=>{
        setTodos((prev)=>
        prev.map((todo)=>
        todo.id === id ?{...todo,completed:!todo.completed}:todo
        )
        )
    }

    const addValue = () =>{
        
        if(!inp.trim())  return;
        const temp = {
            id:Date.now(),
            title:inp,
            completed:false
        }
        setTodos([...todos,temp])
        setInp('')
    }

    
  return (
    <>
    <input placeholder="Enter the task"  value={inp} onChange={(e)=>setInp(e.target.value)} className="border border-gray-300" />
    <button type="submit" onClick={addValue}>Add</button>
        <ul>
            {todos && todos.map((todo)=>(
                
                <li  key={todo.id}
                style={{textDecoration : todo.completed ? "line-through" : "none",cursor:"pointer"}}>

                    {editingId === todo.id ? (
                    <>
                    <input placeholder="Start editing..." value={edittext} onChange={(e)=>setEdittext(e.target.value)} className="border border-gray-300"/>

                     <button >Save</button>
                     <button>Cancel</button>
                    
                     </>
                    )
                    :
                    (
                    <>
                     <span onClick={()=>toggletodo(todo.id)}>
                    {todo.title}
                    </span>
                    <button onClick={()=>setEditingId(todo.id)}>Edit</button>
                    </>
                    )
                    }
                </li>
                ))}
        </ul>
    </>
  )
}

