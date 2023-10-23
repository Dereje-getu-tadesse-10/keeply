import React from 'react';

import styles from './input.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...rest }) => (
  <input className={styles.input} {...rest} />
);
