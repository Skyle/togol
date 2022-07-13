import { TodoInput } from '../components/TodoInput';
import { Todos } from '../components/Todos';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Button from '../components/ui/Button';

export const IndexPage = () => {
  const localTodoList = useSelector(
    (state: RootState) => state.localTodos.todos
  );
  const isLogged = false;
  return (
    <div className='grid gap-4 max-w-lg'>
      <TodoInput />
      <Todos />

      {isLogged ? (
        <Button onClick={() => {}}>Logout</Button>
      ) : (
        <div>
          <Link
            className='text-center mx-5 font-medium hover:text-red-900'
            to='/login'
          >
            Login
          </Link>

          <Link
            className='text-center font-medium hover:text-red-900'
            to='/register'
          >
            SignUp
          </Link>
        </div>
      )}

      <div>{JSON.stringify(localTodoList)}</div>
    </div>
  );
};
