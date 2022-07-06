import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
export const Todo = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className="rounded-lg shadow border p-4 grid gap-4">
      {todos.map((todo) => (
        <div className="bg-neutral-100 p-2 rounded hover:bg-neutral-200 transition-all duration-200 active:scale-105 ease-in-out">
          <div>{todo.value}</div>
          <div className="">{todo.createdAt}</div>
        </div>
      ))}
    </div>
  );
};
