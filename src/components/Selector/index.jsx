import React from "react";
import "./style.css";

function Selector(props) {
  const { selectAll, selectActive, selectComplete } = props;
  return (
    <div className="selector">
      <button className="btn" onClick={() => selectAll()}>
        All
      </button>
      <button className="btn" onClick={() => selectActive()}>
        Active
      </button>
      <button className="btn" onClick={() => selectComplete()}>
        Completed
      </button>
    </div>
  );
}

export default Selector;
