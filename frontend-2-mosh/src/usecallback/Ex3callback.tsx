import { useState, useCallback, useEffect } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<string[]>([]);

  // Stable search function using useCallback
  const fetchUsers = useCallback(async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setUsers([]);
      return;
    }
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`
    );
    const data = await res.json();
    setUsers(data.map((u: any) => u.name));
  }, []);

  // Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchUsers(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, fetchUsers]);

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {users.length > 0 ? (
          users.map((u, idx) => <li key={idx}>{u}</li>)
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
}
