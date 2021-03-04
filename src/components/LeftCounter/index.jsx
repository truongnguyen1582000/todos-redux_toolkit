import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function LeftCounter(props) {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <p className="counter">
        {todos.filter((item) => item.isComplete === false).length} items left
      </p>
    </div>
  );
}

export default LeftCounter;
