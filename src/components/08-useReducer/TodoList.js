import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  console.log(todos);
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          index={i}
        />
      ))}
    </ul>
  );
};
