import React from 'react';
import { TodoItem } from '../features/todolist/todoListSlice';
import Button from './ui/Button';
import { useSelector, useDispatch } from 'react-redux';
type Props = { todo: TodoItem; index: number };

function Todo({ todo, index }: Props) {
  const dispatch = useDispatch();

  return (
    <div className='bg-neutral-100 p-2 rounded hover:bg-neutral-200 transition-all duration-200 active:scale-105 ease-in-out'>
      <div className='flex'>
        <div className='grow'>
          <div className='text-neutral-700 font-light text-sm'>
            {todo.createdAt}
          </div>
          <div>{todo.value}</div>
        </div>
        <div>
          <Button
            onClick={() => {
              dispatch(delete { index });
            }}
          >
            🗑
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
