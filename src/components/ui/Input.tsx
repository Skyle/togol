import React from 'react';

type Props = {
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onEnter: Function;
};

function Input(props: Props) {
  const { value, onChange, onEnter } = props;

  return (
    <input
      value={value}
      className='border border-neutral-300 shadow shadow-neutral-200 rounded-lg bg-neutral-50 focus:outline-none px-4 py-2'
      type='text'
      onChange={onChange}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onEnter();
        }
      }}
    />
  );
}

export default Input;
