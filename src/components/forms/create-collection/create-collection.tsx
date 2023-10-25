'use client';
import styles from './create-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button, Input, Modal } from '../../ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { useModalStore } from '$/stores/useModalStore';
import { collectionWithoutUserIdSchema } from '$/schemas/collections-schema';
import { createCollection } from '$/lib/fetchs';

type FormData = z.infer<typeof collectionWithoutUserIdSchema>;

export const CreateCollection = ({ userId }: { userId: string }) => {
  const { isOpen, toggleModal } = useModalStore();

  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(collectionWithoutUserIdSchema),
  });

  const onSubmit = async (data: FormData) => {
    const datas = {
      ...data,
      userId: userId,
    };

    const response = await createCollection(datas, userId);
    toast.success(response.message);
    router.refresh();
    toggleModal();
    reset();
  };

  return (
    <>
      <Button
        onClick={() => {
          toggleModal();
          reset();
        }}
      >
        Créer une collection
      </Button>
      {isOpen ? (
        <Modal
          title='Créer une collection'
          subtitle='La collection vous permet de regrouper vos objets collectionnés'
        >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {isDirty && !isValid && (
              <span className={styles.form__error}>
                Veuillez remplir tous les champs
              </span>
            )}

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
              <Select id='status' {...register('status')}>
                <option value='PUBLIC'>Public</option>
                <option value='PRIVATE'>Private</option>
              </Select>
            </div>
            <p className={styles.warning_status}>
              En fonction du statut, votre collection sera visible par tout le
              monde ou seulement par vous sur votre profil.
            </p>
            <Button
              type='submit'
              disabled={isSubmitting || !isValid}
              aria-aria-disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? 'En cours...' : 'Créer'}
            </Button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
