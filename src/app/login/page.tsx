import styles from './page.module.css';
import Link from 'next/link';
import { Auth } from '$/components/forms/index';
import { auth } from '$/lib/auth';
import { redirect } from 'next/navigation';
import { Heading, Separator } from '$/components/ui';
import { Paragraph } from '$/components/ui/paragraph/paragraph';

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
