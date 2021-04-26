import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import LeftCounter from "./components/LeftCounter";
import Selector from "./components/Selector";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ClearCompleted from "./components/ClearCompleted";

function App() {
  const todos = useSelector((state) => state.todos);
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [status, setStatus] = useState(localStorage.getItem("status") || "all");

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((item) => item.isComplete === true));
        break;
      case "active": // uncompleted
        setfilteredTodos(todos.filter((item) => item.isComplete === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <h2 className="app-name">todos</h2>
      <TodoForm />
      <TodoList todos={filteredTodos} />
      <div className="select">
        <LeftCounter />
        <Selector
          selectAll={() => setStatus("all")}
          selectActive={() => setStatus("active")}
          selectComplete={() => setStatus("completed")}
          status={status}
        />
      </div>
      {todos.filter((item) => item.isComplete).length !== 0 && (
        <ClearCompleted />
      )}
    </div>
  );
}

export default App;

//Your site is published at https://truongnguyen1582000.github.io/todos-redux_toolkit/
