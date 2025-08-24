import { useState, useMemo } from "react";

const generateUsers = () => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `User ${i + 1}`,
  }));
};

const Exmemo = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const users = useMemo(() => generateUsers(), []); // Memoized list (won't regenerate)

  const filteredUsers = useMemo(() => {
    console.log("🔍 Filtering users...");
    // Simulate heavy computation
    const start = performance.now();
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    const end = performance.now();
    console.log(`⏱️ Filter took: ${Math.round(end - start)}ms`);
    return result;
  }, [search, users]);

  return (
    <div>
      <h1>🔍 Filtered Users: {filteredUsers.length}</h1>
      <input
        type="text"
        value={search}
        placeholder="Search user..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Re-render!</button>
      <p>Other state: {count}</p>
    </div>
  );
};

export default Exmemo;
