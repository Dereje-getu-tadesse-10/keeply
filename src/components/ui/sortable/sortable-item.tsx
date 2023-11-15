'use client';
import styles from './sortable.module.css';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { Collectible } from '@prisma/client';
import { Badge, Card, Heading, Paragraph } from '..';
import { CheckCheck, Grip, X } from 'lucide-react';
import { useModalStore } from '$/stores/use-odalStore';
import { useCollectibleId } from '$/stores/use-collectibleId';

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
          <Heading as='h3' variant='h3'>
            {name}
          </Heading>
          <Badge intent={rest.status === 'ACQUIRED' ? 'primary' : 'secondary'}>
            {rest.status === 'ACQUIRED' ? (
              <CheckCheck size='14px' />
            ) : (
              <X size='14px' />
            )}
          </Badge>
        </Card>
      </li>
    );
  }
);
