import { TodoInput } from '../components/TodoInput';
import { Todos } from '../components/Todos';

import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Button from '../components/ui/Button';
import { LogoutComponent } from '../components/user/LogoutComponent';
import TextLink from '../components/ui/TextLink';

export const IndexPage = () => {
  const localTodoList = useSelector(
    (state: RootState) => state.localTodos.todos
  );

  return (
    <div className='grid gap-4 max-w-lg'>
      <TodoInput />
      <Todos />

      {/* {isLogged ? (
        <Button onClick={() => {}}>Logout</Button>
      ) : (
        <div>
          <TextLink route='/login'>Login</TextLink>
          <TextLink route='/register'>SignUp</TextLink>
        </div>
      )} */}
      <LogoutComponent />

      <div>{JSON.stringify(localTodoList)}</div>
    </div>
  );
};
