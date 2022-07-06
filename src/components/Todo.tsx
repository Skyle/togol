import React from "react";
import { remove, TodoItem } from "../features/todolist/todoListSlice";
import Button from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";
type Props = { todo: TodoItem; index: number };

function Todo({ todo, index }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="bg-neutral-100 p-2 rounded hover:bg-neutral-200">
      <div className="flex">
        <div className="grow pr-4">
          <div className="text-neutral-500 font-light text-sm">
            {todo.createdAt}
          </div>
          <div className="text-neutral-700">{todo.value}</div>
        </div>
        <div>
          <Button
            onClick={() => {
              dispatch(remove(index));
            }}
          >
            🗑
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
