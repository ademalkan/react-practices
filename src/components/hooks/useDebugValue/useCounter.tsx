import { useDebugValue, useState } from "react";

type Counter = {
  incrementHandler: () => void;
  decrementHandler: () => void;
  count: number;
};

const useCounter = (): Counter => {
  const [count, setCount] = useState<number>(0);

  const incrementHandler = (): void => setCount(count + 1);

  const decrementHandler = (): void => setCount(count - 1);

  const debugValue = count > 0 ? "Positive number" : "Zero or negative number";

  useDebugValue(debugValue);

  return { incrementHandler, decrementHandler, count };
};

export default useCounter;
