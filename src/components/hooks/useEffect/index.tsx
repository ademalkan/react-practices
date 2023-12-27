import { useEffect, useState } from "react";
import DescriptionContainer from "../../DescriptionContainer";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const title = `useEffect`;
  const description = `useEffect is a React Hook that lets you synchronize a component with an external system.`;

  return (
    <DescriptionContainer title={title} description={description}>
      Counter : {count}
    </DescriptionContainer>
  );
};

export default UseEffect;
