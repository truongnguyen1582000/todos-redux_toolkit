import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeAll } from "../TodoList/TodoSlice";
import "./style.css";
function TodoForm(props) {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      setValue("");
      return;
    }

    dispatch(addTodo(value));
    setValue("");
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const allIsComplete =
    todos.filter((item) => item.isComplete === true).length === todos.length;

  return (
    <form onSubmit={handleSubmit}>
      <i
        className="fas fa-check-double complete-all"
        onClick={() => dispatch(completeAll())}
        style={{
          opacity: allIsComplete ? "1" : "0.4",
        }}
      ></i>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={handleOnChange}
        value={value}
      />
    </form>
  );
}

export default TodoForm;
