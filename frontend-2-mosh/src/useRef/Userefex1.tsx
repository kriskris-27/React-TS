import { useRef, useState } from "react";

const Userefex1 = () => {
     const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <>
    <h2>userRef</h2>
    <p>useref.current holds the value.It does not re render when updated,it also persist values across re render like state but silently</p>

     <p>Count: {count}</p>
      <p>Renders: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}


export default Userefex1;