import { CollectionStatus } from '@prisma/client';
import { Badge, Button, Heading, Paragraph } from '../../ui';
import styles from './collection.module.css';
import dayjs from 'dayjs';

type Props = {
  collection: {
    name: string;
    status: CollectionStatus;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };
  authenticated?: boolean;
  onDelete?: () => void;
};

export const CollectionCard = ({
  collection,
  authenticated = false,
  onDelete,
}: Props) => {
  console.log(collection);
  return (
    <div className={styles.collection_card}>
      <Heading as={'h3'} variant='h3'>
        {collection.name}
      </Heading>
      <Paragraph variant='hightlight'>{collection.description}</Paragraph>
    
      {authenticated ? (
          <>
            <Paragraph>
        {collection.created_at
          ? `Créée le ${dayjs(collection.created_at).format('DD/MM/YYYY')}`
          : ''}
      </Paragraph>
           <Paragraph>
        {collection.updated_at
          ? `Modifiée le ${dayjs(collection.updated_at).format('DD/MM/YYYY')}`
          : ''}
      </Paragraph>
      <Badge>{collection.status === "PUBLIC" ? "Publique" : "Privée"}</Badge>
      
          </>

      ):null}
      {authenticated ? (
        <>
          <Button onClick={onDelete} intent={'danger'} size={'small'}>
            Supprimer la collection
          </Button>
        </>
      ) : null}
    </div>
  );
};
