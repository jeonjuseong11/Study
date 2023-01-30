import "./App.css";
import Todo from "./conponents/Todo";
import React, { useState } from "react";
import { List, Paper, Container } from "@mui/material";
import AddTodo from "./conponents/AddTodo";
import Today from "./conponents/Today";
import Remain from "./conponents/Remain";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const localList = localStorage.getItem("todos");
    if (localList) setItems(JSON.parse(localList));
  }, []);
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    item.id = `ID: ${items.length}`; //key를 위한 id
    item.done = false;
    setItems([...items, item]);
    localStorage.setItem("todos", JSON.stringify(items));
    console.log("items : ", items);
  };
  const deleteItem = (item) => {
    //삭제할 아이템 찾기
    const newItems = items.filter((e) => e.id !== item.id);
    //삭제할 아이템을 제외한 아이템을 다시 배열에 저장
    setItems([...newItems]);
    localStorage.setItem("todos", JSON.stringify(newItems));
  };
  const editItem = () => {
    setItems([...items]);
    localStorage.setItem("todos", JSON.stringify(items));
  };
  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <Container>
        <h1>TODO LIST</h1>
        <Today />
        <Remain />
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
