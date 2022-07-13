import { TodoItemInput } from '../components/TodoItemInput';
import { Todos } from '../components/Todos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Button from '../components/ui/Button';

export const IndexPage = () => {
  const localTodoList = useSelector(
    (state: RootState) => state.localTodoList.localTodoItems
  );
  const isLogged = false;
  return (
    <div className='grid gap-4 max-w-lg'>
      <TodoItemInput />
      <Todos />
      {isLogged ? (
        <Button onClick={() => {}}>Logout</Button>
      ) : (
        <>
          <Link
            className='text-center px-4 shadow py-2 border rounded-lg bg-neutral-50 transition-all duration-200 active:scale-105 ease-in-out'
            to='/login'
          >
            Login
          </Link>

          <Link
            className='text-center px-4 shadow py-2 border rounded-lg bg-neutral-50 transition-all duration-200 active:scale-105 ease-in-out'
            to='/register'
          >
            SignUp
          </Link>
        </>
      )}

      <div>{JSON.stringify(localTodoList)}</div>
    </div>
  );
};
