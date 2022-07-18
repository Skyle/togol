import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='px-4 border-neutral-300 shadow shadow-neutral-200 py-2 border rounded-lg bg-neutral-50 transition-all duration-200 active:scale-105 ease-in-out hover:border-neutral-400'
    >
      {children}
    </button>
  );
}

export default Button;
