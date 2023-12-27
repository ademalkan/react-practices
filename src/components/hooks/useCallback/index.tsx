import { useCallback, useState } from "react";
import DescriptionContainer from "../../DescriptionContainer";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const title = `useCallback`;
  const description = `useCallback is a React Hook that lets you cache a function definition
  between re-renders.`;

  return (
    <DescriptionContainer title={title} description={description}>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </DescriptionContainer>
  );
};

export default UseCallback;
