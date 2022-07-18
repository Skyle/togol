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

      <LogoutComponent />

      {/* <div>{JSON.stringify(localTodoList)}</div> */}
    </div>
  );
};
