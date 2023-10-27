import React from 'react';
import styles from './paragraph.module.css';

type ParagraphProps = {
  variant?: 'p' | 'hightlight';
  className?: string;
  children: React.ReactNode;
};

export const Paragraph = ({
  variant = 'hightlight',
  className,
  children,
  ...props
}: ParagraphProps) => {
  const combinedClassName = `${styles[variant]} ${className || ''}`.trim();
  return (
    <p className={combinedClassName} {...props}>
      {children}
    </p>
  );
};
