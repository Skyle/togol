import { TodoInput } from '../components/TodoInput';
import { Todos } from '../components/Todos';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const IndexPage = () => {
  const localTodos = useSelector((state: RootState) => state.localTodos.todos);

  return (
    <div className='grid gap-4 max-w-lg'>
      <TodoInput />
      <Todos />
      <p>
        <NavLink to='register'>Login </NavLink>
      </p>
      <div>{JSON.stringify(localTodos)}</div>
    </div>
  );
};
