//import "./App.css";
import Counter from "./Counter";
import MyHeader from "./MyHeader";
function App() {
  let name = "전주성";
  const style = {
    App: { backgroundColor: "lightgray", textAlign: "center" },
    h2: { color: "red " },
    bold_text: { color: "green" },
  };
  const number = 5;
  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 React {name}</h2>
      <b id="bold_Text" style={style.bold_text}>
        {/*조건부 렌더링 : 조건에 따라 다르게 렌더링*/}
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <Counter />
    </div>
  );
}

export default App;
