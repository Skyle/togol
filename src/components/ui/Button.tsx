import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='my-2 px-4 shadow py-2 border rounded-lg bg-neutral-50 transition-all duration-200 active:scale-105 ease-in-out'
    >
      {children}
    </button>
  );
}

export default Button;
