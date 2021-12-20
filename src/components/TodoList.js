import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const TodoList = () => {
  const todos = useSelector((state) => state.todos)  
  let completedCount = todos.filter(t => t.completed === true)?.length;

  return (
    <div>
      <br />
        <ItemList list={todos} />
      <br />
      <br />
        {!!completedCount && <ItemList list={todos} completed />}
    </div>
  );
};

export default TodoList;
