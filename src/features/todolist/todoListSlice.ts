import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoItem {
  value: String;
  checked?: Boolean;
  createdAt: String;
}

export interface TodoList {
  todos: TodoItem[];
}

const initialState: TodoList = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = todoListSlice.actions;

export default todoListSlice.reducer;
