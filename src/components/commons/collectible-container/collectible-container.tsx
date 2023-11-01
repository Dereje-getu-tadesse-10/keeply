'use client';
import { useEffect, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { SortableList } from '$/components/ui/sortable/sortable-list';
import { Collectible } from '@prisma/client';
import { updateCollectiblesPostions } from '$/lib/fetchs';

type Props = {
  collectibles: Collectible[];
  userId: string;
};

export const CollectibleContainer = ({ collectibles, userId }: Props) => {
  const [items, setItems] = useState(collectibles);

  useEffect(() => {
    setItems(collectibles);
  }, [collectibles]);

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

    const updates = changedItems.map((item) => {
      const updatedIndex = updatedItems.findIndex(
        (updatedItem) => updatedItem.id === item.id
      );
      return {
        id: item.id,
        dragPosition: updatedIndex,
      };
    });

    updateCollectiblesPostions(userId, updates);
  };

  return (
    <section>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </section>
  );
};
