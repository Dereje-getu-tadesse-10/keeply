import styles from './loading.module.css';

export const Loading = ({number}: {number: number}) => (
    <div className={styles.loading}>
       {Array.from(Array(number).keys()).map((_, index) => (
           <div key={index}></div>
       ))}
    </div>
)