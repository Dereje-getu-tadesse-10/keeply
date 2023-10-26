'use client';
import { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { SortableList } from '$/components/ui/sortable/sortable-list';
import { Prisma, Collectible, CollectibleStatus } from '@prisma/client';

type Props = {
  collectibles: Collectible[];
  userId: Prisma.UserWhereUniqueInput;
};

export const CollectibleContainer = ({ collectibles, userId }: Props) => {
  const [items, setItems] = useState(collectibles);

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    const updatedItems = arrayMoveImmutable(items, oldIndex, newIndex);
    setItems(updatedItems);

    const changedItems = updatedItems.filter((item, index) => {
      return (
        items.findIndex((originalItem) => originalItem.id === item.id) !== index
      );
    });

    changedItems.forEach((item, index) => {
      const updatedIndex = updatedItems.findIndex(
        (updatedItem) => updatedItem.id === item.id
      );
      fetch(`/api/collectibles/${item.id}/drag-position`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          dragPosition: updatedIndex,
        }),
      });
    });
  };

  return (
    <section>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </section>
  );
};
