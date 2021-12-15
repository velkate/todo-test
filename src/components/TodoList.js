import React, { useContext } from "react";
import Store from "../store/context";
import ItemList from "./ItemList";

const TodoList = () => {
  const { state } = useContext(Store);
  let completedCount = state.todos.filter(t => t.completed === true)?.length;

  return (
    <div>
      <br />
      <ItemList list={state.todos} />
      <br />
      <br />
      {!!completedCount && <ItemList list={state.todos} completed />}
    </div>
  );
};

export default TodoList;
