import React, { forwardRef, useImperativeHandle } from "react";

export type TCounter = {
  getCount: () => void;
  increment: () => void;
  decrement: () => void;
};

const Counter = forwardRef<TCounter>((props, ref) => {
  const [count, setCount] = React.useState(0);
  useImperativeHandle(ref, () => ({
    getCount: () => console.log(`Counter value is ${count}`),
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  }));
  return <div>{count}</div>;
});
export default Counter;
