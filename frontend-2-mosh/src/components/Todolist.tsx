
interface Todo{
    todoarr:string[]
}

const Todolist: React.FC<Todo> = ({todoarr}) => {
  return (
    <>
    <div>Todolist</div>
    <ul>
    {todoarr.map((todo,index)=>(
        <li key={index}>{todo}</li>
    ))}
    </ul>
    </>
  )
}

export default Todolist