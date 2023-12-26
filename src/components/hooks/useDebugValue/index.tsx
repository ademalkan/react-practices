import useCounter from "./useCounter";

const UseDebugValue = () => {
  const { count, decrementHandler, incrementHandler } = useCounter();

  return (
    <>
      <h1>useDebugValue</h1>
      <p>
        useDebugValue is a React Hook that lets you add a label to a custom Hook
        in React DevTools.
      </p>
      <div>
        <div>Counter: {count}</div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </>
  );
};

export default UseDebugValue;
