import { useRef } from "react";
import DescriptionContainer from "../../DescriptionContainer";
import Counter, { TCounter } from "./Counter";

const UseImperativeHandle = () => {
  const title = `useImperativeHandle`;
  const description = `useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.`;

  const counterRef = useRef<TCounter>(null);

  const incrementHandler = () => counterRef?.current?.increment();
  const decrementHandler = () => counterRef?.current?.decrement();
  const getCountHandler = () => counterRef?.current?.getCount();

  return (
    <DescriptionContainer title={title} description={description}>
      <Counter ref={counterRef} />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={getCountHandler}>Counter Value (console)</button>
    </DescriptionContainer>
  );
};

export default UseImperativeHandle;
