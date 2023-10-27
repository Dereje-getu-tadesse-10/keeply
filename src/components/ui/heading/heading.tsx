import React from 'react';
import styles from './heading.module.css';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3';
  variant?: 'h1' | 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({
  as = 'h1',
  variant = 'h1',
  className,
  children,
  ...props
}: HeadingProps) => {
  const Component = as;
  const combinedClassName = `${styles[variant]} ${className || ''}`.trim();
  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};
