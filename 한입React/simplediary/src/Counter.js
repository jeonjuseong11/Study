import { useReducer } from "react";

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 1);
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 1 })}>add 1</button>
      <button onClick={() => dispatch({ type: 10 })}>add 10</button>
      <button onClick={() => dispatch({ type: 100 })}>add 100</button>
    </div>
  );
};

export default Counter;
