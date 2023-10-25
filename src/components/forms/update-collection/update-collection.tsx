'use client';
import styles from './update-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button, Input, Modal } from '$/components/ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { CollectionStatus } from '@prisma/client';
import { updateCollectionSchema } from '$/schemas/collections-schema';
import dayjs from 'dayjs';
import { updateCollection, deleteCollection } from '$/lib/fetchs';

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

export const UpdateCollection = ({ collection }: { collection: Props }) => {
  const router = useRouter();

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
    router.push(`/dashboard`);
  };

  const handleDelete = async () => {
    const response = await deleteCollection(collection.id, collection.userId);
    toast.success(response.message);
    router.push(`/dashboard`);
    router.refresh();
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{collection.name}</h1>
        <p className={styles.description}>
          Créé le {dayjs(collection.created_at).format('DD/MM/YYYY')}
        </p>
        <p className={styles.description}>
          Mis à jour le {dayjs(collection.updated_at).format('DD/MM/YYYY')}
        </p>
        {/* <p className={styles.description}>
          Cette collection contient{' '}
          {collection._count.items === 0
            ? 'aucun item'
            : collection._count.items === 1
            ? 'un item'
            : `${collection._count.items} items`}
        </p> */}
        <Button intent={'secondary'} onClick={() => handleDelete()}>
          Supprimer la collection
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.subtitle}>Modifier la collection</h2>
        <Input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <Input {...register('description')} />
        {errors.description && <p>{errors.description.message}</p>}
        <Select {...register('status')}>
          <option value='PUBLIC'>Public</option>
          <option value='PRIVATE'>Private</option>
        </Select>
        {errors.status && <p>{errors.status.message}</p>}
        <Button type='submit'>
          {isSubmitting ? 'En cours...' : 'Modifier la collection'}
        </Button>
      </form>
    </section>
  );
};
