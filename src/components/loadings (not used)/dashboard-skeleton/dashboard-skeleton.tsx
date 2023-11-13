import styles from './dashboard-skeleton.module.css';
import { Separator } from '$/components/ui';

export const DashboardSkeleton = () => {
  return (
    <div>
      <div className={styles.loading_header}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Separator />
      <div className={styles.loading_card_container}>
        {[...Array(6)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};
