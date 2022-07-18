import React from 'react';

type Props = {
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onEnter?: any;
  placeholder?: string;
  labelText?: string;
  type?: 'text' | 'password';
};

function Input(props: Props) {
  const {
    value,
    onChange,
    onEnter,
    placeholder,
    labelText,
    type = 'text',
  } = props;

  return (
    <>
      <label>{labelText}</label>
      <input
        value={value}
        placeholder={placeholder}
        className='my-4 border border-neutral-300 shadow shadow-neutral-200 rounded-lg bg-neutral-50 focus:outline-none px-4 py-2'
        type={type}
        onChange={onChange}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            onEnter();
          }
        }}
      />
    </>
  );
}

export default Input;
