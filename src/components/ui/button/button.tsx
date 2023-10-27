import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import styles from './button.module.css';

const button = cva(styles.button, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
      danger: styles.danger,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;
