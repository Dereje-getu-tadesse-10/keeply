import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './badge.module.css';

const badge = cva(styles.badge, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<BadgeProps> = ({ intent, ...rest }) => (
  <span className={badge({ intent })} {...rest} />
);
