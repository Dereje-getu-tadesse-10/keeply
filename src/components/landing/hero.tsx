import { ButtonLink, Paragraph } from '../ui';
import styles from './landing.module.css';
import app from '../../../public/app.png';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => (
  <div className={styles.hero__container}>
    <div>
      <h1>Keeply</h1>
      <p>
        Gérez vos collections en un clin d&apos;œil! Keeply vous aide à suivre,
        trier et partager vos collections précieuses. Que vous soyez amateur de
        vinyles, de cartes ou de timbres !
      </p>
    </div>
    <ButtonLink href='/login'>Commencer maintenant</ButtonLink>
    <Image src={app} alt='collections' width={1000} height={1000} />
    <Link href='/dereje'>
      <Paragraph>Voir le profil</Paragraph>
    </Link>
  </div>
);
