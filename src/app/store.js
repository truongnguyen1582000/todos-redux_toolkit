import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/TodoList/TodoSlice";

export default configureStore({
  reducer: { todos: todoReducer },
});
