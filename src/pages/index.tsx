import { TodoItemInput } from "../components/TodoItemInput";
import { Todos } from "../components/Todos";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const IndexPage = () => {
  const localTodoList = useSelector(
    (state: RootState) => state.localTodoList.localTodoItems
  );

  return (
    <div className="grid gap-4 max-w-lg">
      <TodoItemInput />
      <Todos />
      <p>
        <NavLink to="register">Login </NavLink>
      </p>
      <div>{JSON.stringify(localTodoList)}</div>
    </div>
  );
};
