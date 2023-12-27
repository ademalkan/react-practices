import { useReducer } from "react";
import DescriptionContainer from "../../DescriptionContainer";

type CounterState = {
  count: number;
};

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: CounterState, action: CounterAction) => {
  const reducerActions = {
    INCREMENT: () => ({ count: state.count + 1 }),
    DECREMENT: () => ({ count: state.count - 1 }),
  };
  return reducerActions[action.type]?.() || state;
};

const UseReducer = () => {
  const title = `useReducer`;
  const description = `useReducer is a React Hook that lets you manage state in a component.`;

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <DescriptionContainer title={title} description={description}>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </DescriptionContainer>
  );
};

export default UseReducer;
