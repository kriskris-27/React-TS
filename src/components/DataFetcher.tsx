import React, { useEffect, useState } from 'react'

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

const DataFetcher = () => {

    const [data,setData] = useState<Todo[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string|null>(null);

    useEffect(()=>{
        const fetchdata=async () =>{
            setLoading(true);
            setError(null);

            try{
                const resp= await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
                const result : Todo[] = await resp.json();
                setData(result);
            }catch(err){
                if(err instanceof Error) { 
                    setError(err.message);
                }
                else{
                    setError("Unknown error");
                }
            }finally{
                setLoading(false)
            }
        }
        fetchdata();
    },[])


  return (
    <>
    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Todo List Fetcher</h3>
{loading && (<p>Loading todos...</p>)}
{error && (<p>Error:{error}</p>)}
{!loading && !error && data.length > 0 && (
    <div>
        <h4>Fetched todos</h4>
    <ul>
        {data.map((todo)=>(
            <li key={todo.id}>
                 <span className={todo.completed ? "line-through text-gray-500" : "font-medium"}>
                  {todo.title}
                </span>
            </li>
        ))}
    </ul>
    </div>
)}
{!loading && !error && data.length === 0 && ( // Message if no data found after loading
        <p className="text-gray-500 text-lg text-center">No todos found.</p>
      )}
    </>
  )
}

export default DataFetcher
