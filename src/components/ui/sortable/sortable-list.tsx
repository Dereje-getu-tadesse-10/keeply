import { SortableContainer, SortableContainerProps } from 'react-sortable-hoc';
import { SortableItem } from './sortable-item';
import { Collectible, CollectibleStatus } from '@prisma/client';

// interface Props {
//   items: Collectible[];
//   onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
// }

interface Props extends SortableContainerProps {
  items: (Collectible & { status?: CollectibleStatus })[];
}

export const SortableList = ({ items, onSortEnd }: Props) => {
  const SortableList = SortableContainer(() => {
    return (
      <ul>
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

  return <SortableList onSortEnd={onSortEnd} />;
};
