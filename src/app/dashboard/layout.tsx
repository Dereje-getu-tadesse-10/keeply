import { Navbar } from '$/components/commons';
import styles from './page.module.css';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default RootLayout;
