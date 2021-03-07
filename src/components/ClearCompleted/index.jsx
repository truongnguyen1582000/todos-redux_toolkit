import { useDispatch } from "react-redux";
import "./style.css";
import { deleteAllCompleteTodo } from "../TodoList/TodoSlice";

function ClearCompleted(props) {
  const dispatch = useDispatch();
  return (
    <div className="clear-completed">
      <p className="btn" onClick={() => dispatch(deleteAllCompleteTodo())}>
        Clear completed
      </p>
    </div>
  );
}

export default ClearCompleted;
