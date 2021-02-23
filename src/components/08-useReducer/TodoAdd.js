import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChanges, reset] = useForm({
    description: "",
  });

  // handle para el boton agrgar
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    // define el objeto
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // enviar al dispath la accion
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoCapitalize="off"
          className="form-control"
          value={description}
          onChange={handleInputChanges}
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
