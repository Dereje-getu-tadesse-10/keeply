import styles from './sortable.module.css';
import { SortableContainer, SortableContainerProps } from 'react-sortable-hoc';
import { SortableItem } from './sortable-item';
import { Collectible } from '@prisma/client';

interface Props {
  items: Collectible[];
  onSortEnd: ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => void;
}

export const SortableList = ({ items, onSortEnd }: Props) => {
  const SortableList = SortableContainer(() => {
    return (
      <ul className={styles.list_container}>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${value.dragPosition}`}
            index={index}
            {...value}
          />
        ))}
      </ul>
    );
  });

  return <SortableList onSortEnd={onSortEnd} useDragHandle />;
};
