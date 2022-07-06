import React from 'react';

type Props = {
  value: string | number | readonly string[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  dispatchTodoItem: any;
};

function Input(props: Props) {
  const { value, setValue, dispatchTodoItem } = props;

  return (
    <input
      value={value}
      className='border border-neutral-300 shadow shadow-neutral-200 rounded-lg bg-neutral-50 focus:outline-none px-4 py-2'
      type='text'
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          dispatchTodoItem();
        }
      }}
    />
  );
}

export default Input;
