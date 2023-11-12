import Image from 'next/image';
import logo from '../../../../public/icon.svg';
import { Heading } from '$/components/ui';
import styles from './logo.module.css';

export const Logo = () => (
  <div className={styles.logo}>
    <Image src={logo} alt='logo' width={34} height={34} />
    <Heading as={'h2'} variant='h2'>
      eeply
    </Heading>
  </div>
);
