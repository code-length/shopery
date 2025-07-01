import { clsx } from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'fill' | 'border' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export const CustomButton: React.FC<ButtonProps> = ({
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

export default CustomButton;
