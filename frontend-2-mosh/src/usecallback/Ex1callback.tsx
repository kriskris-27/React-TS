import { useState, useCallback } from 'react';

const FancyButton = ({ onClick }: { onClick: () => void }) => {
  console.log('🔁 FancyButton re-rendered');
  return <button onClick={onClick}>Click Me!</button>;
};

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // This callback won't be recreated unless `setCount` changes
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Clicks: {count}</h2>
      <FancyButton onClick={handleClick} />

      <button onClick={() => setOther(other + 1)}>Unrelated State Change</button>
      <p>Other state: {other}</p>
    </div>
  );
};

export default UseCallbackExample;
