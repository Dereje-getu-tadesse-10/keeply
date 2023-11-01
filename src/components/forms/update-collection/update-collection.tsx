'use client';
import styles from './update-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Badge, Button, Heading, Input, Modal, Paragraph } from '$/components/ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { CollectionStatus } from '@prisma/client';
import { updateCollectionSchema } from '$/schemas/collections-schema';
import dayjs from 'dayjs';
import { updateCollection, deleteCollection } from '$/lib/fetchs';
import { useModalStore } from '$/stores/useModalStore';
import { Warning } from '$/components/commons';

type Props = {
  userId: string;
  id: string;
  name: string;
  status: CollectionStatus;
  description: string | null;
  created_at: Date | null;
  updated_at: Date | null;
};

type FormData = z.infer<typeof updateCollectionSchema>;

const MODAL_ID = 'update-collection';

export const UpdateCollection = ({ collection }: { collection: Props }) => {
  const router = useRouter();
  const { modals, toggleModal } = useModalStore();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm<FormData>({
    resolver: zodResolver(updateCollectionSchema),
    defaultValues: {
      name: collection.name,
      description: collection.description || '',
      status: collection.status,
    },
  });

  const onSubmit = async (data: FormData) => {
    const datas: FormData = {
      userId: collection.userId,
      ...data,
    };
    const res = await updateCollection(datas, collection.id);
    toast.success(res.message);
    router.refresh();
  };

  const handleDelete = async () => {
    const response = await deleteCollection(collection.id, collection.userId);
    toast.success(response.message);
    router.push(`/dashboard`);
    router.refresh();
    toggleModal(MODAL_ID);
  };

  return (
    <>
      {modals[MODAL_ID] && (<Modal
        modalId={MODAL_ID}
        title='Modifier la collection'
      >
        <div className={styles.form__container}>
          <div className={styles.header}>
            <Heading as={"h3"} variant='h3'>{collection.name}</Heading>
            <Paragraph variant='hightlight'>
              {collection.description}
            </Paragraph>
            <Badge>
              {collection.status ? 'Publique' : 'Privée'}
            </Badge>
            <Button intent={'danger'} onClick={() => handleDelete()}>
              Supprimer la collection
            </Button>
            <Warning
              text="En fonction du statut, votre collection sera visible par tout le
                  monde ou seulement par vous sur votre profil."
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              label='Nom de la collection'
              id='name'
              {...register('name')} />
            {errors.name && <Paragraph isError>{errors.name.message}</Paragraph>}
            <Input
              label='Description'
              id='description'
              {...register('description')} />
            {errors.description && <Paragraph isError>{errors.description.message}</Paragraph>}
            <Select
              id='status'
              label='Status'
              {...register('status')}>
              <option value='PUBLIC'>
                Publique
              </option>
              <option value='PRIVATE'>
                Privée (visible uniquement par vous)
              </option>
            </Select>
            {errors.status && <Paragraph isError>{errors.status.message}</Paragraph>}
            <Button type='submit'>
              {isSubmitting ? 'En cours...' : 'Modifier la collection'}
            </Button>
          </form>
        </div>

      </Modal>)}
    </>
  );
};
