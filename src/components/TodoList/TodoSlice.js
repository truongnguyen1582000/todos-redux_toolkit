import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export const TodoSLice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("data")) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: shortid.generate(),
        title: action.payload,
        isComplete: false,
      });
      localStorage.setItem("data", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);

      state.splice(itemIndex, 1);
      localStorage.setItem("data", JSON.stringify(state));
    },
    setComplete: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      state[itemIndex].isComplete = !state[itemIndex].isComplete;
      localStorage.setItem("data", JSON.stringify(state));
    },
    completeAll: (state, action) => {
      if (
        state.filter((item) => item.isComplete === true).length === state.length
      ) {
        state.map((item) => (item.isComplete = false));
      } else state.map((item) => (item.isComplete = true));
      localStorage.setItem("data", JSON.stringify(state));
    },
    deleteAllCompleteTodo: (state, action) => {
      state.filter((item) => item.isComplete === false);
      localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

const { reducer, actions } = TodoSLice;
export const {
  addTodo,
  deleteTodo,
  setComplete,
  completeAll,
  deleteAllCompleteTodo,
} = actions;
export default reducer;
