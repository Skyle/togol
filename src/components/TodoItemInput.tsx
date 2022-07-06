import { useSelector, useDispatch } from 'react-redux';
import { add } from '../features/todolist/todoListSlice';
import { RootState } from '../store';
import { useState } from 'react';

export const TodoItemInput = () => {
  const [value, setValue] = useState('');

  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  return (
    <div className='flex space-x-2'>
      <input
        value={value}
        className='border shadow rounded-lg focus:outline-none px-4 py-2'
        type='text'
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className='px-4 shadow py-2 border rounded-lg'
        onClick={() => {
          const options = {
            weekday: 'long',
            // year: 'numeric',
            // month: 'long',
            // day: 'numeric',
          };
          const date = new Date().toLocaleDateString('de-DE', options);

          dispatch(add({ value, createdAt: date }));
        }}
      >
        +
      </button>
    </div>
  );
};
