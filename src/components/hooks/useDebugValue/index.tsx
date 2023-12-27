import DescriptionContainer from "../../DescriptionContainer";
import useCounter from "./useCounter";

const UseDebugValue = () => {
  const { count, decrementHandler, incrementHandler } = useCounter();

  const title = `useDebugValue`;
  const description = `useDebugValue is a React Hook that lets you display a label for custom hooks in React DevTools.`;

  return (
    <DescriptionContainer title={title} description={description}>
      <div>Counter: {count}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </DescriptionContainer>
  );
};

export default UseDebugValue;
