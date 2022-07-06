import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/todolist/todoListSlice";
import { RootState } from "../store";
import { useState } from "react";

export const TodoItemInput = () => {
  const [value, setValue] = useState("");

  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-2 justify-center">
      <input
        value={value}
        className="border shadow rounded-lg focus:outline-none px-4 py-2"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="px-4 shadow py-2 border rounded-lg"
        onClick={() => {
          const options: Intl.DateTimeFormatOptions = {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          };

          const date = new Date().toLocaleDateString("de-DE", options);

          dispatch(add({ value, createdAt: date }));
        }}
      >
        +
      </button>
    </div>
  );
};
