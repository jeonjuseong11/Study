import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
  //사용자의 입력을 저장할 오브젝트
  const [item, setItem] = useState({ title: "" });
  const addItem = props.addItem;
  //onButtonClick함수
  const onButtonClick = () => {
    addItem(item); //addItem함수 사용
    setItem({ title: "" });
  };
  //enterKeyEventHandler 함수
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };
  //onInputChange함수
  const onInputChange = (e) => {
    setItem({ title: e.target.value });
    console.log(item);
  };
  //onInputChange함수 TextField에 연결
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          onChange={onInputChange}
          onKeyPress={enterKeyEventHandler}
          value={item.title}
        />
      </Grid>
      <Grid xs={1} ms={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          varient="outlined"
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
