import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './select.module.css';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <select className={styles.select} ref={ref} {...props} />
    </div>
  )
);

Select.displayName = 'Select';
