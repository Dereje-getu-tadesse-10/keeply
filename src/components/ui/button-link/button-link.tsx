import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import styles from './button-link.module.css';
import Link from 'next/link';

const buttonLink = cva(styles['button-link'], {
  variants: {
    intent: {
      primary: styles.primary,
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

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonLink> {}

export const ButtonLink: React.FC<LinkButtonProps> = ({
  intent,
  size,
  ...props
}) => (
  <Link passHref={true} href={props.href || '/'} {...props}>
    <a className={buttonLink({ intent, size })}>{props.children}</a>
  </Link>
);
