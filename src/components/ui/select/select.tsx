import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './select.module.css';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => <select className={styles.select} ref={ref} {...props} />
);

Select.displayName = 'Select';
