import { useDispatch } from "react-redux";
import "./style.css";
import { deleteAllCompleteTodo } from "../TodoList/TodoSlice";

function ClearCompleted(props) {
  const dispatch = useDispatch();
  return (
    <div className="clear-completed">
      <button className="btn" onClick={() => dispatch(deleteAllCompleteTodo())}>
        Clear completed
      </button>
    </div>
  );
}

export default ClearCompleted;
