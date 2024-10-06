import React, { FC } from 'react';

interface ButtonT {
  title: string;
  onClick: () => void;
}

const Button: FC<ButtonT> = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      <div>{title}</div>
    </div>
  );
};

export default Button;
