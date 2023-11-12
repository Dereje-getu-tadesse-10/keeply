import styles from './page.module.css';
import { Mail } from 'lucide-react';
import { ButtonLink, Heading, Paragraph } from '$/components/ui';

const Page = () => {
  return (
    <main className={styles.main}>
      <header className={styles.flexCenterColumn}>
        <div>
          <Mail size={'40'} />
        </div>
        <Heading as='h1' variant='h1'>
          S&apos;il vous plaît, vérifiez votre boîte de réception
        </Heading>
      </header>
      <section className={styles.flexCenterColumn}>
        <Paragraph variant='hightlight'>
          Nous vous avons envoyé un lien magique pour vous connecter à votre
          compte. Si vous ne le voyez pas,{' '}
          <strong>vérifiez votre dossier spam</strong>.
        </Paragraph>
        <Paragraph variant='hightlight'>
          Si vous n&apos;avez pas reçu le lien, vous pouvez en demander un
          autre.{' '}
        </Paragraph>
        <ButtonLink href='/login' intent={'secondary'}>
          Recevoir un autre lien
        </ButtonLink>
      </section>
    </main>
  );
};

export default Page;
