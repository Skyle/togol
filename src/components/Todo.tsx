import React from "react";
import Button from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  TodoItem,
  useDeleteTodoItemMutation,
  useGetAllTodoItemsQuery,
} from "../services/todoItem";
type Props = { todo: TodoItem; index: number };

function Todo({ todo, index }: Props) {
  const [deleteTodoItem] = useDeleteTodoItemMutation();
  const { refetch } = useGetAllTodoItemsQuery("");

  return (
    <div className="bg-neutral-100 p-2 rounded hover:bg-neutral-200">
      <div className="flex">
        <div className="grow pr-4">
          <div className="text-neutral-500 font-light text-sm">
            {todo.createdAt}
          </div>
          <div className="text-neutral-700">{todo.text}</div>
        </div>
        <div>
          <Button
            onClick={() => {
              deleteTodoItem(todo.id).then(() => {
                refetch();
              });
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
