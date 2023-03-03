import React, {
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useReducer,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest";
// import Lifecycle from "./Lifecycle";
//API 주소
//https://jsonplaceholder.typicode.com/comments

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; //geData의 initData
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE":
      return state.filter((it) => it.id !== action.targetId);
    case "EDIT":
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    default:
      return state; //값이 변화되지 않음
  }
};
//부가적으로 내보내는 것
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, []);
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
    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1; //다음 일기 id를 위해 id를 1추가함
  }, []);
  const onRemove = useCallback((targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    // setData((data) => data.filter((it) => it.id !== targetId));
    dispatch({ type: "REMOVE", targetId });
  }, []);
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);
  //모든 요소에 수정대상이라면 원래있던 데이터를 수정할 것이고 { ...it, content: newContent }
  //아니면 원본 데이터를 유지한다 ( it )
  //map을 이용해서 수정 대상 찾고 새로운 배열을 만들어서 setData에 전달
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* useEffect 사용해보기
      <Lifecycle />
      React.memo 사용해보기
      <OptimizeTest /> */}
          <DiaryEditor />
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}%</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
