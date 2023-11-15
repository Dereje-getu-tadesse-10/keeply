import styles from './loading.module.css';

export const LoadingUI = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};
