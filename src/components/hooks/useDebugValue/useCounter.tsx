import { useDebugValue, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useDebugValue(count > 0 ? "Positive number" : "Zero or negative number");

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };

  return { incrementHandler, decrementHandler, count };
};

export default useCounter;
