import styles from './card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
};
