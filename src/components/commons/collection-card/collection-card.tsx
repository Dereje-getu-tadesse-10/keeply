import styles from './collection-card.module.css';
import dayjs from 'dayjs';
import { Collection } from '@prisma/client';
import { Badge, Heading, Paragraph } from '$/components/ui';

type Props = Partial<
  Collection
  & {
    _count: {
      items: number;
    };
  }
>;

export const CollectionCard = ({ collection }: { collection: Props }) => {
  return (
    <div>
      <Heading as='h1' variant='h1'>
        {collection.name}
      </Heading>
      <Paragraph variant='hightlight'>{collection.description}</Paragraph>
      <Paragraph variant='hightlight'>
        <b>{collection._count?.items}</b> objets dans cette collection
      </Paragraph>
      <Paragraph variant='hightlight'>
        La collection est {collection.status ? 'publique' : 'privée'}
      </Paragraph>
    </div>
  );
};
