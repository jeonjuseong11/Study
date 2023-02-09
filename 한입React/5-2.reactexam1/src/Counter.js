import React, { useState } from "react";
const Counter = () => {
  // 0 에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  //count 상테
  const [count, setCount] = useState(0);
  //  count : 상태의 값으로 사용됨
  //  setCount : count라는 상태를 변화시키는 상태변화 함수로 활용됨
  // useState(초기화 값)
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  //상태는 여러 개 갖을 수 있지만 이름이 중복되면 안된다.
  const [count2, setCount2] = useState(0);
  const onIncrease2 = () => {
    setCount2(count2 + 1);
  };
  const onDecrease2 = () => {
    setCount2(count2 - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  );
};
export default Counter;
