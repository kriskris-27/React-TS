import type Data from "../types/Todotype"
import { Tododata } from "../services/Tododata"
import { useState } from "react"



export  const Todomain = () => {
    const [todos , setTodos] = useState<Data[]>(Tododata)

    const toggletodo =(id:number)=>{
        setTodos((prev)=>
        prev.map((todo)=>
        todo.id === id ?{...todo,completed:!todo.completed}:todo
        )
        )
    }


  return (
    <>
        <ul>
            {todos && todos.map((todo)=>(
                <li onClick={()=>toggletodo(todo.id)} key={todo.id}
                style={{textDecoration : todo.completed ? "line-through" : "none",cursor:"pointer"}}>
                    {todo.title}
                </li>
                ))}
        </ul>
    </>
  )
}

