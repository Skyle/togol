import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/todolist/todoListSlice";
import { RootState } from "../store";
import { useState } from "react";
import Button from "./ui/Button";

export const TodoItemInput = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  function dispatchTodoItem() {
    if (value !== "") {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
      const date = new Date().toLocaleDateString("de-DE", options);
      dispatch(add({ value, createdAt: date }));
      setValue("");
    }
  }

  return (
    <div className="flex space-x-2 justify-center">
      <input
        value={value}
        className="border border-neutral-300 shadow shadow-neutral-200 rounded-lg bg-neutral-50 focus:outline-none px-4 py-2"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            dispatchTodoItem();
          }
        }}
      />
      <Button
        onClick={() => {
          dispatchTodoItem();
        }}
      >
        +
      </Button>
    </div>
  );
};
