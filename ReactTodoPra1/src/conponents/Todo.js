import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Button } from "@mui/material";
const Todo = (props) => {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const [open, setOpen] = useState(false);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;
  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  };
  const deleteEventHandler = () => {
    deleteItem(item);
  };
  const turnOffReadOnly = () => {
    setReadOnly(false);
    setOpenHandler();
  };
  const turnOnReadOnly = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
    setOpenHandler();
  };

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  };
  const setOpenHandler = () => {
    setOpen(!open);
  };
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          className={`${item.done ? "checked" : ""}`}
          inputProps={{ "aria-label": "naked", readOnly: true }}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Modify Todo" onClick={turnOffReadOnly}>
          {item.done ? "" : <CreateOutlinedIcon />}
        </IconButton>
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
      <Dialog open={open}>
        <DialogTitle>수정하기</DialogTitle>
        <DialogContent>
          <InputBase
            inputProps={{ "aria-label": "naked", readOnly: readOnly }}
            onChange={editEventHandler}
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={turnOnReadOnly}>save</Button>
          <Button onClick={setOpenHandler}>cancel</Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
};

export default Todo;
