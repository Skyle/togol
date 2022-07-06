import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
import Todo from "./Todo";
export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);

  if (todos.length !== 0)
    return (
      <div className="rounded-lg shadow border p-4 grid gap-4">
        {todos.map((todo, i) => (
          <div key={i}>
            <Todo todo={todo}></Todo>
          </div>
        ))}
      </div>
    );
  return null;
};
