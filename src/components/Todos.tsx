import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, TodoItem } from "../features/todolist/todoListSlice";

import { RootState } from "../store";
import Todo from "./Todo";
export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    async function init() {
      const data = await fetch("http://localhost:3055/todolist");
      const parsedData: TodoItem[] = await data.json();
      try {
      } catch (error) {}
      for (const todoItem of parsedData) {
        console.log("hmm");

        dispatch(add(todoItem));
      }
    }
    init();
  }, []);

  if (todos.length !== 0)
    return (
      <div className="rounded-lg shadow border p-4 grid gap-4">
        {todos.map((todo, i) => (
          <div key={i}>
            <Todo todo={todo} index={i}></Todo>
          </div>
        ))}
      </div>
    );
  return null;
};
