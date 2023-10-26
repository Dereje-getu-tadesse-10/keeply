import styles from './collection-card.module.css';
import dayjs from 'dayjs';
import { Collection } from '@prisma/client';

type Props = Partial<
  Collection & {
    image?: string | null;
    _count: {
      items: number;
    };
    profil: boolean;
  }
>;

export const CollectionCard = ({ collection }: { collection: Props }) => {
  return (
    <div className={styles.card}>
      <h1>{collection.name}</h1>
      <p>{collection.description}</p>
      <p>Crée le {dayjs(collection.created_at).format('DD/MM/YYYY')}</p>
      <p>Mis a jour le {dayjs(collection.updated_at).format('DD/MM/YYYY')}</p>
      <p>
        {collection._count
          ? `${collection._count.items} collectibles`
          : '0 collectibles'}
      </p>
    </div>
  );
};
