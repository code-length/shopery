import { clsx } from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: 'fill' | 'border' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'fill',
  size = 'small',
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variant && styles[variant],
        size && styles[size]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
