'use client';
import styles from './update-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button, Input, Modal, TextArea } from '$/components/ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { CollectionStatus } from '@prisma/client';
import { updateCollectionSchema } from '$/schemas/collections-schema';
import { updateCollection, deleteCollection } from '$/lib/fetchs';
import { useModalStore } from '$/stores/use-odalStore';
import { CollectionCard } from '$/components/dashboard';
import { useMutation } from '@tanstack/react-query';
 import { Collection } from '$/server/collections-manager';

type Props = Collection & {
  userId: string;
};

type FormData = z.infer<typeof updateCollectionSchema>;

const MODAL_ID = 'update-collection';

export const UpdateCollection = ({ collection }: { collection: Props }) => {
  const router = useRouter();
  const { modals, toggleModal } = useModalStore();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid },
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

  const onSubmit = async (data: FormData) => {
    const datas: FormData = {
      userId: collection.userId,
      ...data,
    };
    mutate(datas);
  };

  return (
    <>
      {modals[MODAL_ID] && (
        <Modal modalId={MODAL_ID} title='Modifier la collection'>
          <div className={styles.form__container}>
            <CollectionCard collection={collection} authenticated />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div>
                <Input
                  label='Nom de la collection'
                  id='name'
                  {...register('name')}
                />
                <TextArea
                  label='Description'
                  id='description'
                  {...register('description')}
                />
                <Select id='status' label='Status' {...register('status')}>
                  <option value='PUBLIC'>Publique</option>
                  <option value='PRIVATE'>
                    Privée (visible uniquement par vous)
                  </option>
                </Select>
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
