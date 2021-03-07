import React, { useState } from "react";
import "./style.css";

function Selector(props) {
  const { selectAll, selectActive, selectComplete, status } = props;
  return (
    <div className="selector">
      <h2
        className={status === "all" ? "btn btn-active" : "btn"}
        onClick={() => {
          selectAll();
          localStorage.setItem("status", "all");
        }}
      >
        All
      </h2>
      <h2
        className={status === "active" ? "btn btn-active" : "btn"}
        onClick={() => {
          selectActive();
          localStorage.setItem("status", "active");
        }}
      >
        Active
      </h2>
      <h2
        className={status === "completed" ? "btn btn-active" : "btn"}
        onClick={() => {
          selectComplete();
          localStorage.setItem("status", "completed");
        }}
      >
        Completed
      </h2>
    </div>
  );
}

export default Selector;
