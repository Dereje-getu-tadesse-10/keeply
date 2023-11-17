import { ButtonLink, Paragraph } from '$/components/ui';
import styles from './landing.module.css';
import app from '../../../../public/app.png';
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
      <Paragraph variant='p'>
        <Link target='blanc' href='https://keeply-neon.vercel.app/dereje'>
          https://keeply-neon.vercel.app/dereje
        </Link>
      </Paragraph>
    </div>
    <ButtonLink href='/login'>Commencer maintenant</ButtonLink>

    <Image
      priority
      src={
        'https://res.cloudinary.com/decneq2aj/image/upload/f_auto,q_auto/xkinpbvlh7j1ydbzbeka'
      }
      alt='collections'
      width={600}
      height={600}
    />
  </div>
);
