'use client';
import styles from './update-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Badge,
  Button,
  Heading,
  Input,
  Modal,
  Paragraph,
} from '$/components/ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { CollectionStatus } from '@prisma/client';
import { updateCollectionSchema } from '$/schemas/collections-schema';
import dayjs from 'dayjs';
import { updateCollection, deleteCollection } from '$/lib/fetchs';
import { useModalStore } from '$/stores/useModalStore';
import { Warning } from '$/components/commons';
import { CollectionCard } from '$/components/dashboard';
import { useMutation } from '@tanstack/react-query';
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

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) => updateCollection(data, collection.id),
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
      toggleModal(MODAL_ID);
    },
  });

  const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
    mutationFn: () => deleteCollection(collection.id, collection.userId),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push(`/dashboard`);
      router.refresh();
      toggleModal(MODAL_ID);
    },
  });

  const onSubmit = async (data: FormData) => {
    const datas: FormData = {
      userId: collection.userId,
      ...data,
    };
    mutate(datas);
  };

  const handleDelete = async () => mutateDelete();

  return (
    <>
      {modals[MODAL_ID] && (
        <Modal modalId={MODAL_ID} title='Modifier la collection'>
          <div className={styles.form__container}>
            <CollectionCard
              collection={collection}
              authenticated
              onDelete={handleDelete}
            />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div>
                <Input
                  label='Nom de la collection'
                  id='name'
                  {...register('name')}
                />
                {errors.name && (
                  <Paragraph isError>{errors.name.message}</Paragraph>
                )}
                <Input
                  label='Description'
                  id='description'
                  {...register('description')}
                />
                {errors.description && (
                  <Paragraph isError>{errors.description.message}</Paragraph>
                )}
                <Select id='status' label='Status' {...register('status')}>
                  <option value='PUBLIC'>Publique</option>
                  <option value='PRIVATE'>
                    Privée (visible uniquement par vous)
                  </option>
                </Select>
                {errors.status && (
                  <Paragraph isError>{errors.status.message}</Paragraph>
                )}
              </div>

              <Button
                type='submit'
                disabled={!isValid || isSubmitting || isPending}
                aria-disabled={!isValid || isSubmitting || isPending}
              >
                {isSubmitting ? 'En cours...' : 'Modifier la collection'}
              </Button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};
