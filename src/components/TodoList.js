import React, { useContext } from "react";
import Store from "../context";
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
      {!!completedCount && <ItemList list={state.todos} complited />}
    </div>
  );
};
export default TodoList;
