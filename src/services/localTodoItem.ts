import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TodoItem } from "./todoItem";

// Define a type for the slice state
interface LocalTodoListState {
  localTodoItems: TodoItem[];
}

// Define the initial state using that type
const initialState: LocalTodoListState = {
  localTodoItems: [],
};

export const localTodoListSlice = createSlice({
  name: "localTodoList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      state.localTodoItems.push(action.payload);
    },
  },
});

export const { add } = localTodoListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.localTodoList;

export default localTodoListSlice.reducer;
