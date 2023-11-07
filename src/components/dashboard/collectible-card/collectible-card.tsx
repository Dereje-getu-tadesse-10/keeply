'use client';
import styles from './collectible-card.module.css';
import { Button, Heading, Paragraph } from '$/components/ui';

export const CollectibleCard = ({
  collectible,
  authenticated,
  onDelete,
}: {
  collectible: any;
  authenticated: boolean;
  onDelete?: () => void;
}) => (
  <div className={styles.collectible}>
    <Heading as='h2' variant='h3'>
      {collectible.name}
    </Heading>
    <Paragraph variant='p'>{collectible.description}</Paragraph>
    <Paragraph variant='p'>
      <b>{collectible.name}</b> est{' '}
      {collectible.status === 'PLANNED' ? 'manquant' : 'acquéri'} dans votre
      collection.
    </Paragraph>
    {authenticated && (
      <Button size={'small'} intent={'danger'} onClick={onDelete}>
        Supprimer de la collection
      </Button>
    )}
  </div>
);
