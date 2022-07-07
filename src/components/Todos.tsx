import { useEffect, useState } from "react";
import { TodoItem, useGetAllTodoItemsQuery } from "../services/todoItem";

import Todo from "./Todo";
export const Todos = () => {
  const { data, error, isLoading } = useGetAllTodoItemsQuery("");
  if (isLoading) return null;
  if (data && data.length !== 0)
    return (
      <div className="rounded-lg shadow border p-4 grid gap-4">
        {data.map((todo: TodoItem, i: number) => (
          <div key={i}>
            <Todo todo={todo} index={i}></Todo>
          </div>
        ))}
      </div>
    );
  return null;
};
