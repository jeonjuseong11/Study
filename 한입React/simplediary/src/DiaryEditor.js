import { useState, useRef } from "react";
const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  //React.MutableRefObject -> html, DOM요소에 접근할 수 있게 함
  const contentInput = useRef();
  const [state, setState] = useState({ author: "", content: "", emotion: 1 });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      alert("저자명은 최소 1글자 이상 입력해주세요.");
      //ref는 current라는 현재 가르키고 있는 값을 불러올 수 있다.
      return; //더이상 진행하지 못하게 return
    }
    if (state.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return; //더이상 진행하지 못하게 return
    }
    onCreate(state.author, state.content, state.emotion);
    console.log(state);
    alert("저장 성공");
    setState({ author: "", content: "", emotion: 1 });
    //저장에 성공하면 입력 후 입력창을 비우기 위해
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="emotion" value={state.emotion} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
