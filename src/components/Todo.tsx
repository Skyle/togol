import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store';
export const Todo = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div>
      {todos.map((todo) => (
        <div>
          <div>{todo.value}</div>
          <div>{todo.createdAt}</div>
        </div>
      ))}
    </div>
  );
};
