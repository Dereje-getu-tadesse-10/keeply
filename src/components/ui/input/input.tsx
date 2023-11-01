import React from 'react';

import styles from './input.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        className={styles.input}
        ref={ref}
        {...props}
      />
    </div>
  )
);

Input.displayName = 'Input';
