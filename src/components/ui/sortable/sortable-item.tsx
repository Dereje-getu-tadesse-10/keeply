'use client';
import styles from './sortable.module.css';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { Collectible } from '@prisma/client';
import { Badge, Card, Heading, Paragraph } from '..';
import { Grip } from 'lucide-react';
import { useModalStore } from '$/stores/useModalStore';
import { useCollectibleId } from '$/stores/useCollectibleId';
type Props = Collectible;

const DragHandle = SortableHandle(() => (
  <span className={styles.drag}>
    <Grip cursor={'grab'} size={'20px'} />
  </span>
));

const MODAL_ID = 'update-collectible';

export const SortableItem = SortableElement(
  ({ name, description, ...rest }: Props) => {
    const { toggleModal } = useModalStore();
    const { setCollectibleId } = useCollectibleId();

    return (
      <li className={styles.list}>
        <Card
          onClick={() => {
            toggleModal(MODAL_ID);
            setCollectibleId(rest.id);
          }}
        >
          <DragHandle />
          <Paragraph as='h3' variant='h3'>
            {name}
          </Paragraph>
          <Badge intent={rest.status === 'ACQUIRED' ? 'primary' : 'secondary'}>
            {rest.status === 'ACQUIRED' ? 'Acquéri' : 'Manquant'}
          </Badge>
        </Card>
      </li>
    );
  }
);
