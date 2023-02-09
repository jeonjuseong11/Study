//import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./MyHeader";
function App() {
  let name = "전주성";
  const style = {
    App: { backgroundColor: "lightgray" },
    h2: { color: "red " },
    bold_text: { color: "green" },
  };
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  const number = 5;
  return (
    <Container>
      <div className="App" style={style.App}>
        <MyHeader />
        <h2 style={style.h2}>안녕 React {name}</h2>
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
