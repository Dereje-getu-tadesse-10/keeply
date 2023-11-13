'use client';
import { Collection } from '@prisma/client';
import { Button, Heading, Modal, Paragraph } from '$/components/ui';
import { useModalStore } from '$/stores/useModalStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { deleteCollection } from '$/lib/fetchs';
import toast from 'react-hot-toast';
import styles from './collection-card.module.css';

type Props = Collection & {
  _count: {
    items: number;
  };
};

export const CollectionHeader = ({ collection }: { collection: Props }) => {
  const { toggleModal } = useModalStore();
  const router = useRouter();

  const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
    mutationFn: () => deleteCollection(collection.id, collection.userId),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push(`/dashboard`);
      router.refresh();
    },
  });
  const handleDelete = async () => mutateDelete();
  return (
    <div className={styles.card__container}>
      <Heading as='h1' variant='h1'>
        {collection.name}
      </Heading>
      <Paragraph variant='hightlight'>{collection.description}</Paragraph>
      <Paragraph variant='hightlight'>
        La collection contient <strong>{collection._count?.items}</strong>{' '}
        objet(s)
      </Paragraph>
      <Paragraph variant='hightlight'>
        votre collection est{' '}
        <strong>
          {collection.status === 'PUBLIC' ? 'publique' : 'privée'}
        </strong>
      </Paragraph>
      <div className={styles.btn_container}>
        <Button
          size='small'
          intent={'secondary'}
          onClick={() => toggleModal('update-collection')}
        >
          Modifier la collection
        </Button>
        <Button size='small' intent={'danger'} onClick={() => handleDelete()}>
          Supprimer la collection
        </Button>
        <Button
          intent={'primary'}
          size={'small'}
          onClick={() => toggleModal('create-collectible')}
        >
          Ajouter un objet
        </Button>
      </div>
    </div>
  );
};
