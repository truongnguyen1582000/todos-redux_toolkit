import "./style.css";
import { useDispatch } from "react-redux";
import { deleteTodo, setComplete } from "./TodoSlice";

function TodoList(props) {
  const { todos } = props;

  const dispatch = useDispatch();
  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map((todo) => (
          <li className="todo__list-item" key={todo.id}>
            {todo.isComplete ? (
              <i
                className="fas fa-check-square check-btn"
                onClick={() => dispatch(setComplete(todo.id))}
              ></i>
            ) : (
              <i
                className="far fa-check-square check-btn"
                onClick={() => dispatch(setComplete(todo.id))}
              ></i>
            )}
            <span
              className={todo.isComplete ? "active todo-title" : "todo-title"}
            >
              {todo.title}
            </span>
            <i
              className="fas fa-trash-alt delete-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            ></i>
          </li>
        ))}
        {!todos.length && <h2 className="empty-list">EMPTY !</h2>}
      </ul>
    </div>
  );
}

export default TodoList;
