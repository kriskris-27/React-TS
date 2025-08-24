import { useState, useCallback, useMemo } from "react";

const FruitList = ({ filterFruits }: { filterFruits: (term: string) => string[] }) => {
  console.log("🍓 FruitList re-rendered");
  const [term, setTerm] = useState("");

  const results = useMemo(() => filterFruits(term), [filterFruits, term]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <ul>
        {results.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Ex2callback() {
  const [count, setCount] = useState(0);

  const fruits = [
    "Apple", "Banana", "Mango", "Orange", "Pineapple",
    "Papaya", "Strawberry", "Grapes", "Watermelon"
  ];

  // ✅ useCallback ensures filterFruits function reference is stable
  const filterFruits = useCallback(
    (term: string) => fruits.filter(f => f.toLowerCase().includes(term.toLowerCase())),
    [fruits]
  );

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase counter</button>

      <FruitList filterFruits={filterFruits} />
    </div>
  );
}
