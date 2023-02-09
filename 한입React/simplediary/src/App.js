import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "전주성",
//     content: "HI1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//     //Date객체를 ms로 숫자로 변환해서 저장
//   },
//   {
//     id: 2,
//     author: "전주성2",
//     content: "HI2",
//     emotion: 3,
//     created_date: new Date().getTime(),
//     //Date객체를 ms로 숫자로 변환해서 저장
//   },
//   {
//     id: 3,
//     author: "전주성3",
//     content: "HI3",
//     emotion: 1,
//     created_date: new Date().getTime(),
//     //Date객체를 ms로 숫자로 변환해서 저장
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current, //0이라는 값을 가르킴
    };
    dataId.current += 1; //다음 일기 id를 위해 id를 1추가함
    setData([newItem, ...data]); //기존 배열 앞에 새로운 아이템을 추가
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
