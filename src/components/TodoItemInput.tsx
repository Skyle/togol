import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import {
  useAddTodoItemMutation,
  useGetAllTodoItemsQuery,
} from '../services/todoItem';

export const TodoItemInput = () => {
  const [value, setValue] = useState('');
  const [addTodoItem, { isLoading }] = useAddTodoItemMutation();
  const { refetch } = useGetAllTodoItemsQuery('');

  function handleAddTodoItem() {
    addTodoItem({
      text: value,
      createdAt: String(new Date().toLocaleDateString()),
    }).then(() => {
      setValue('');
      refetch();
    });
  }
  return (
    <div className='flex space-x-2 justify-center'>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onEnter={handleAddTodoItem}
      />
      <Button onClick={handleAddTodoItem}>+</Button>
    </div>
  );
};
