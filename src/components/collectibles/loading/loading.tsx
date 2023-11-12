import styles from './loading.module.css';

export const LoadingCollectible = () => (
  <div
    className={styles.spinner__container}
    // style={{
    //   position: 'relative',
    //   height: '100px',
    // }}
  >
    <div className='spinner'></div>
  </div>
);
