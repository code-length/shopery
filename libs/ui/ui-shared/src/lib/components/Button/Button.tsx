import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  fill: string;
  size: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  fill,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.button + ' ' + styles[fill] + ' ' + styles[size]}
    >
      {label}
    </button>
  );
};

export default Button;
