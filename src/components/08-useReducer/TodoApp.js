import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import "./styles.css";

const init = () => {
  // si en en local storage no hay devuelve arreglo vacio
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //grabar el local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]) // cada vez que cambien los todos se ejecutara

  // handle para borrar un todo
  const handleDelete = (todoId) => {
    // define la accion
    const action = {
      type: 'delete',
      payload: todoId
    };

    // enviar al dispath la accion
    dispatch(action);
  }

  const handleToggle = (todoId) =>{
    dispatch({
      type:"toggle",
      payload: todoId
    });
  }

  const handleAddTodo = (newTodo) =>{
    // enviar al dispath la accion
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  return (
    <div>
      <h1>Todo App ( {todos.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo = {handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};
