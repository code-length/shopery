import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import Image from 'next/image';

interface ButtonProps {
  children: string;
  variant?: 'primary' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode | string;
  fill?: 'filled' | 'outline';
  ghost?: boolean;
}

export default function Button({
  children = 'Button',
  variant = 'primary',
  size = 'large',
  icon,
  fill = 'filled',
  ghost = false,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className={clsx(
          styles.button,
          styles[variant],
          styles[fill],
          styles[size],
          isHovered &&
            (fill === 'outline' ? styles.activeOutline : styles.active),
          ghost && (isHovered ? styles.activeGhost : styles.ghost)
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </button>
    </div>
  );
}
