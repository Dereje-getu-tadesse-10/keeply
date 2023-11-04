import React from 'react';

import styles from './text-area.module.css';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <textarea
        placeholder={props.placeholder}
        className={styles.input}
        ref={ref}
        {...props}
      />
    </div>
  )
);

TextArea.displayName = 'Textarea';
