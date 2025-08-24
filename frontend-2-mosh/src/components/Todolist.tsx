import { useState } from "react";
interface Todo {
    todoarr: string[];
}
const Todolist: React.FC<Todo> = ({ todoarr }) => {
    const [inp, setInp] = useState<string>("");
    const [tod, setTod] = useState<string[]>(todoarr);
    const handleClick = () => {
        setTod((prev) => [...prev, inp]);
        setInp("");
    };
    const deleteTask = (todel: number) => {
        setTod(tod.filter((_, ind) => ind !== todel));
    };
    const updateTask = (index: number) => {
        const newTask = prompt("Edit Task:", tod[index]);
        if (newTask != null) {
            setTod((prev) => prev.map((task, i) => (i === index ? newTask.trim() : task)));
        }
    };
    return (
        <div className="container mt-4">
            <h2>Todolist</h2>
            <div className="mb-3">
                <input
                    type="text"
                    value={inp}
                    onChange={(e) => setInp(e.target.value)}
                    className="form-control"
                    placeholder="Enter todo item..."
                />
            </div>
            <button onClick={handleClick} className="btn btn-primary mb-3">
                Add Todo
            </button>
            <ul className="list-group">
                {tod.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {todo}
                        <span>
                            <button onClick={() => updateTask(index)} className="btn btn-sm btn-info me-2">
                                Edit
                            </button>
                            <button onClick={() => deleteTask(index)} className="btn btn-sm btn-danger">
                                ❌
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Todolist;