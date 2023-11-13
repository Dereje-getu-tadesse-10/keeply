import styles from './empty-collection.module.css';
import { Heading, Paragraph } from '$/components/ui';

export const EmptyCollections = () => (
  <div className={styles.empty__collection}>
    <Heading as='h3' variant='h3'>
      On dirait bien que vous n&apos;avez pas encore de collection. 🥲
    </Heading>
    <Paragraph>
      Lancez-vous ! Créez maintenant votre première collection et commencez à y
      ajouter vos objets préférés.
    </Paragraph>
  </div>
);
