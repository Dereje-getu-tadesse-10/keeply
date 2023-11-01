"use client";
import styles from "./sortable.module.css"
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { Collectible } from '@prisma/client';
import { Badge, Card, Heading, Paragraph } from '..';
import { Grip } from "lucide-react";
import { useModalStore } from "$/stores/useModalStore";
type Props = Collectible;

const DragHandle = SortableHandle(() => <span className={styles.drag}><Grip cursor={'grab'} /></span>);

const MODAL_ID = 'create-collectible';

export const SortableItem = SortableElement(
  ({ name, description, ...rest }: Props) => {
    const { toggleModal } = useModalStore();
    return (
      <li className={styles.list}>
        <Card onClick={() => {
          toggleModal(MODAL_ID);
        }}>
          <DragHandle />
          <div>
            <Heading as='h2' variant='h2'>{name}</Heading>
            <Paragraph>{description}</Paragraph>
            <Badge>
              {rest.status === 'ACQUIRED' ? 'Acquéri' : 'Manquant'}
            </Badge>
          </div>
        </Card>
      </li>
    );
  }
);
