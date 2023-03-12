import React, { useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
// import RouteTest from "./components/RouteTest";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1678510534401 },
  { id: 2, emotion: 2, content: "오늘의 일기 2번", date: 1678510534406 },
  { id: 3, emotion: 3, content: "오늘의 일기 3번", date: 1678510534407 },
  { id: 4, emotion: 4, content: "오늘의 일기 4번", date: 1678510534408 },
  { id: 5, emotion: 5, content: "오늘의 일기 5번", date: 1678510534409 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataid = useRef(0);
  //CREATE
  const onCreate = (data, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataid.current,
        date: new Date(data).getTIME(),
        content,
        emotion,
      },
    });
    dataid.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
            {/* <RouteTest /> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
