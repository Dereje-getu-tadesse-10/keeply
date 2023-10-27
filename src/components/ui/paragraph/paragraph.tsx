import React from 'react';
import styles from './paragraph.module.css';

type ParagraphProps = {
  variant?: 'p' | 'hightlight';
  isError?: boolean;
  children: React.ReactNode;
};

export const Paragraph = ({
  variant = 'hightlight',
  isError = false,
  children,
  ...props
}: ParagraphProps) => {
  const combinedClassName = `${styles[variant]} ${isError ? styles.error : ''}`;
  return (
    <p className={combinedClassName} {...props}>
      {children}
    </p>
  );
};
