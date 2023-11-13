import styles from './page.module.css';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.main}>{children}</main>;
};

export default DashboardLayout;
