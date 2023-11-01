"use client";
import { Collection } from '@prisma/client';
import { Button, Heading, Modal, Paragraph } from '$/components/ui';
import { useModalStore } from '$/stores/useModalStore';
import { UpdateCollection } from '$/components/forms';

type Props =
  Collection
  & {
    _count: {
      items: number;
    };
  }
  ;

export const CollectionCard = ({ collection }: { collection: Props }) => {
  const { modals, toggleModal } = useModalStore();
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
      <Button size='medium'>
        Modifier la collection
      </Button>
    </div>
  );
};
