import { TodoInput } from '../components/TodoInput';
import { Todos } from '../components/Todos';

import { useSelector } from 'react-redux';
import { RootState } from '../store';

import { LogoutComponent } from '../components/user/LogoutComponent';

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
