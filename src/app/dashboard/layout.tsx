import { Navbar } from '$/components/commons';
import styles from './page.module.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
       <main className={styles.main}>{children}</main>
    </>
  );
};

export default DashboardLayout;
