import styles from './collection-card.module.css';
import dayjs from 'dayjs';

type Props = {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  _count: {
    items: number;
  };
};

export const CollectionCard = ({ collection }: { collection: Props }) => {
  return (
    <div className={styles.card}>
      <h1>{collection.name}</h1>
      <p>{collection.description}</p>
      <p>Crée le {dayjs(collection.created_at).format('DD/MM/YYYY')}</p>
      <p>Mis a jour le {dayjs(collection.updated_at).format('DD/MM/YYYY')}</p>
      <p>{collection._count.items} collectibles</p>
    </div>
  );
};
