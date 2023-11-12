import { ButtonLink, Heading, Paragraph } from '../ui';
import styles from './landing.module.css';

export const StratNow = () => (
  <div className={styles.start__now}>
    <Heading>Commencez maintenant</Heading>
    <Paragraph>
      N&apos;attendez pas une seconde de plus pour commencer à gérer vos
      collections de vinyles, de cartes ou de timbres avec Keeply. Il est temps
      de montrer au monde vos pièces rares!
    </Paragraph>
    <ButtonLink href='/login'>Commencer maintenant</ButtonLink>
  </div>
);
