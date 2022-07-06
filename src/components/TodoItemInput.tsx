import { useSelector, useDispatch } from 'react-redux';
import { add } from '../features/todolist/todoListSlice';
import { RootState } from '../store';
import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

export const TodoItemInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  function dispatchTodoItem() {
    if (value !== '') {
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      const date = new Date().toLocaleDateString('de-DE', options);
      dispatch(add({ value, createdAt: date }));
      setValue('');
    }
  }

  return (
    <div className='flex space-x-2 justify-center'>
      <Input
        value={value}
        setValue={setValue}
        dispatchTodoItem={dispatchTodoItem}
      />
      <Button
        onClick={() => {
          dispatchTodoItem();
        }}
      >
        +
      </Button>
    </div>
  );
};
