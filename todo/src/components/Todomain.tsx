import type { Data } from "../types/Todotype"
import { useState, useEffect } from "react"

export const Todomain = () => {
  const [todos, setTodos] = useState<Data[]>([])
  const [inp, setInp] = useState("")
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low")
  const [editingId, setEditingId] = useState<number | null>(null)
  const [edittext, setEdittext] = useState("")
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
  const [search, setSearch] = useState("")

  // ✅ load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos")
    if (saved) {
      try {
        setTodos(JSON.parse(saved))
      } catch {
        console.error("Invalid todos in localStorage")
      }
    }
  }, [])

  // ✅ save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // ✅ toggle todo
  const toggletodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // ✅ delete todo
  const todoDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setEdittext("")
    }
  }

  // ✅ add todo
  const addValue = () => {
    if (!inp.trim()) return
    const temp: Data = {
      id: crypto.randomUUID ? Number.parseInt(crypto.randomUUID().slice(-6), 16) : Date.now(), // ✅ safer than Date.now alone
      title: inp.trim(),
      completed: false,
      priority
    }
    setTodos((prev) => [...prev, temp])
    setInp("")
    setPriority("low")
  }

  // ✅ save edited todo
  const saveText = () => {
    if (!edittext.trim() || editingId === null) return
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId ? { ...todo, title: edittext.trim() } : todo
      )
    )
    setEditingId(null)
    setEdittext("")
  }

  // ✅ cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    setEdittext("")
  }

  // ✅ mark all completed
  const markAllCompleted = () => {
    setTodos((prev) => prev.map((todo) => ({ ...todo, completed: true })))
  }

  // ✅ clear completed
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  // ✅ filter + search
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  const searchedTodos = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        📋 Todo List
      </h1>

      {/* input + priority + button */}
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Enter the task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="flex-1 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          className="border border-gray-300 px-2 py-2 rounded-lg"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          onClick={addValue}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* search box */}
      <input
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* filter buttons */}
      <div className="flex justify-center gap-3 mb-4">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as "all" | "active" | "completed")}
            className={`px-3 py-1 rounded-lg text-white ${
              filter === f ? "bg-blue-600" : "bg-gray-500"
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* todos list */}
      <ul className="space-y-3">
        {searchedTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {editingId === todo.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  placeholder="Start editing..."
                  value={edittext}
                  onChange={(e) => setEdittext(e.target.value)}
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={saveText}
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span
                  onClick={() => toggletodo(todo.id)}
                  className={`flex-1 cursor-pointer ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.title}
                </span>

                {/* priority badge */}
                <span
                  className={`px-2 py-1 rounded text-xs font-bold mr-3 ${
                    todo.priority === "high"
                      ? "bg-red-200 text-red-800"
                      : todo.priority === "medium"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {todo.priority}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(todo.id)
                      setEdittext(todo.title)
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => todoDelete(todo.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* footer actions */}
      <div className="flex justify-between mt-6">
        <button
          onClick={markAllCompleted}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Mark All Completed
        </button>
        <button
          onClick={clearCompleted}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Clear Completed
        </button>
      </div>
    </div>
  )
}
