import type Data from "../types/Todotype"
import { Tododata } from "../services/Tododata"
import { useState } from "react"

export const Todomain = () => {
  const [todos, setTodos] = useState<Data[]>(Tododata);
  const [inp, setInp] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [edittext, setEdittext] = useState<string>("");

  // ✅ Toggle completion
  const toggletodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // ✅ Add todo
  const addValue = () => {
    if (!inp.trim()) return;
    const temp = {
      id: Date.now(),
      title: inp,
      completed: false
    }
    setTodos([...todos, temp])
    setInp('')
    console.log(todos);
  }

  // ✅ Save edited text
  const saveText = () => {
    if (!edittext.trim()) return
    setTodos(todos.map((todo) =>
      todo.id === editingId ? { ...todo, title: edittext } : todo
    ))
    setEditingId(null)
    setEdittext('')
  }

  // ✅ Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    setEdittext('')
  }

  // ✅ Delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <input
        placeholder="Enter the task"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        className="border border-gray-300"
      />
      <button type="submit" onClick={addValue}>Add</button>

      <ul>
        {todos && todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {editingId === todo.id ? (
              <>
                <input
                  placeholder="Start editing..."
                  value={edittext}
                  onChange={(e) => setEdittext(e.target.value)}
                  className="border border-gray-300"
                />

                <button
                  onClick={saveText}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full"
                >
                  Save
                </button>

                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span onClick={() => toggletodo(todo.id)}>
                  {todo.title}
                </span>

                <button
                  onClick={() => { setEditingId(todo.id); setEdittext(todo.title); }}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full ml-2"
                >
                  Edit
                </button>

                {/* ✅ Delete button */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-full ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
