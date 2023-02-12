import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import OptimizeTest from "./OptimizeTest";
import Lifecycle from "./Lifecycle";
//API 주소
//https://jsonplaceholder.typicode.com/comments

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
  const dataId = useRef(1);
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        //emotion은 없기 때문에 랜덤난수를 생성해서 넣어준다
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
    //모든 요소에 수정대상이라면 원래있던 데이터를 수정할 것이고 { ...it, content: newContent }
    //아니면 원본 데이터를 유지한다 ( it )
    //map을 이용해서 수정 대상 찾고 새로운 배열을 만들어서 setData에 전달
  };
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  return (
    <div className="App">
      useEffect 사용해보기
      <Lifecycle />
      React.memo 사용해보기
      <OptimizeTest />
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
