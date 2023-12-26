import { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h1>useCallback</h1>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default UseCallback;
