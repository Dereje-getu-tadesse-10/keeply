import { Badge, Button, Heading, Paragraph } from '$/components/ui';
import styles from './collection.module.css';
import dayjs from 'dayjs';
import { Collection } from '$/server/collections-manager';

type Props = {
  collection: Collection;
  authenticated?: boolean;
};

export const CollectionCard = ({
  collection,
  authenticated = false,
}: Props) => {
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
              ? `
              Collection créée le :
              ${dayjs(collection.created_at).format('DD/MM/YYYY')}`
              : ''}
          </Paragraph>
          <Paragraph>
            {collection.updated_at
              ? `
                Collection modifiée le :
              ${dayjs(collection.updated_at).format('DD/MM/YYYY')}`
              : ''}
          </Paragraph>
          <Badge>
            {collection.status === 'PUBLIC' ? 'Publique' : 'Privée'}
          </Badge>
        </>
      ) : null}
    </div>
  );
};
