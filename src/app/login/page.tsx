import styles from './page.module.css';
import Link from 'next/link';
import { Auth } from './components/auth/auth';
import { auth } from '$/lib/auth';
import { redirect } from 'next/navigation';
import { Heading, Separator } from '$/components/ui';
import { Paragraph } from '$/components/ui/paragraph/paragraph';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connexion - Keeply',
  description: `Page de connexion de Keeply`,
  openGraph: {
    type: 'website',
    countryName: 'FR',
    title: 'Page de connexion - Keeply',
    images: [
      {
        url: '/app.png',
        width: 1000,
        height: 1000,
        alt: 'Keeply',
      },
    ],
    url: 'https://keeply-neon.vercel.app/login',
    description: `Page de connexion de Keeply`,
    siteName: 'Keeply',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page de connexion - Keeply',
    images: [
      {
        url: '/app.png',
        width: 1000,
        height: 1000,
        alt: 'Keeply',
      },
    ],
    description: `Page de connexion de Keeply`,
  },
  robots: 'follow, index',
};

const Login = async () => {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className={styles.main}>
      <header className={styles.main__header}>
        <Heading as='h1' variant='h1'>
          Connexion
        </Heading>
      </header>
      <Auth />
      <Paragraph variant='hightlight'>
        Vous n&apos;avez pas de compte ? Pas de problème, Vous pouvez quand même
        vous connecter avec votre compte Google ou Github.
      </Paragraph>
      <Separator />
      <Paragraph variant='p'>
        En vous connectant, vous acceptez nos{' '}
        <Link href='/cookies'>Politique de cookie</Link> et notre{' '}
        <Link href='/privacy'>Politique de confidentialité</Link> ainsi que nos{' '}
        <Link href='/mentions'>Mentions légales</Link>.
      </Paragraph>
    </main>
  );
};

export default Login;
