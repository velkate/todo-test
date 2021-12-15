import React, { useState, useContext } from "react";
import { Grid, Button, TextField } from "@mui/material";
import Store from "../context";

const TodoForm = () => {
  const { dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  const handleTodoChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmitForm = e => {
    if (e.keyCode === 13) handleTodoAdd();
  };

  const handleTodoAdd = e => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={10}>
        <br />
        <TextField
          fullWidth
          size="small"
          id="standart-basic"
          label="Enter new todo"
          value={todo}
          onChange={handleTodoChange}
          onKeyUp={handleSubmitForm}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <br />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleTodoAdd}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default TodoForm;
