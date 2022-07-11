import { TodoItemInput } from '../components/TodoItemInput';
import { Todos } from '../components/Todos';
import { NavLink } from 'react-router-dom';

export const IndexPage = () => {
  return (
    <div className='grid gap-4 max-w-lg'>
      <TodoItemInput />
      <Todos />
      <p>
        <NavLink to='register'>Login </NavLink>
      </p>
    </div>
  );
};
