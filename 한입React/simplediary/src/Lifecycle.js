import React, { useEffect, useState } from "react";
const Lifecycle = () => {
  const [count, setCount] = useState(0);
  //counter에 사용될 state
  const [text, setText] = useState("");
  //input에 사용될 state
  //mount 시 useEffect 사용
  useEffect(() => {
    console.log("Mount");
  }, []);
  //Update 시 useEffect 사용
  useEffect(() => {
    console.log("Update");
  });
  //특정 요소 Update 시 useEffect 사용
  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다 따라서 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);
  useEffect(() => {
    console.log(`count is update : ${text}`);
  }, [text]);
  //unmount시 useEffect사용
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  const UnmountTest = () => {
    useEffect(() => {
      console.log("Mount");
      return () => {
        //Unmount 시점에 실행할 기능
        console.log("Unmount");
      };
    }, []);
    return <div>Unmount Testing Component</div>;
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect 사용</h2>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default Lifecycle;
