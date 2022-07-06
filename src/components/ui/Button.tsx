import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 shadow py-2 border rounded-lg bg-white"
    >
      {children}
    </button>
  );
}

export default Button;
