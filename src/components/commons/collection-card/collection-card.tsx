'use client';
import { Collection } from '@prisma/client';
import { Button, Heading, Modal, Paragraph } from '$/components/ui';
import { useModalStore } from '$/stores/useModalStore';
import styles from './collection-card.module.css'

type Props = Collection & {
  _count: {
    items: number;
  };
};

export const CollectionCard = ({ collection }: { collection: Props }) => {
  const { toggleModal } = useModalStore();
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
      <div className={styles.btn_container}>
        <Button size='small'
          onClick={() => toggleModal('update-collection')}
        >Modifier la collection</Button>
        <Button intent={'secondary'} size={'small'} onClick={() => toggleModal("create-collectible")}>
          Ajouter un objet
        </Button>
      </div>
    </div>
  );
};
