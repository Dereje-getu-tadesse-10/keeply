'use client';
import styles from './create-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input, Modal } from '../../ui';
import { toast } from 'react-hot-toast';

export const bodySchema = z.object({
  name: z
    .string()
    .min(1, 'Le nom de la collection est trop court')
    .max(50, 'Le nom de la collection est trop long'),
  description: z
    .string()
    .min(1, 'La description est obligatoire')
    .max(500, 'La description est trop longue'),
  status: z.enum(['PUBLIC', 'PRIVATE']),
});

type FormData = z.infer<typeof bodySchema>;

export const CreateCollection = ({ userId }: { userId: string }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(bodySchema),
  });

  const onSubmit = async (data: FormData) => {
    const datas = {
      ...data,
      userId: userId,
    };
    const create = await fetch('/api/collections/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datas),
    });
    const response = await create.json();
    return toast.success(response.message);
  };

  return (
    <Modal
      title='Créer une collection'
      subtitle='La collection vous permet de regrouper vos objets collectionnés'
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__control}>
          <label className={styles.form__label} htmlFor='name'>
            Nom de la collection
          </label>
          <Input
            id='name'
            placeholder='Vinyles de taylor swift'
            {...register('name')}
          />
        </div>
        <div className={styles.form__control}>
          <label className={styles.form__label} htmlFor='description'>
            Description
          </label>
          <Input
            id='description'
            placeholder='Une collection de vinyles de taylor swift'
            {...register('description')}
          />
        </div>
        <div className={styles.form__control}>
          <label className={styles.form__label} htmlFor='status'>
            Statut
          </label>
          <select id='status' {...register('status')}>
            <option value='PUBLIC'>Public</option>
            <option value='PRIVATE'>Private</option>
          </select>
        </div>
        <input type='submit' />
      </form>
    </Modal>
  );
};
