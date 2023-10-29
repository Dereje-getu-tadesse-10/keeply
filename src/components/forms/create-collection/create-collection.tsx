'use client';
import styles from './create-collection.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button, Input, Modal, Paragraph } from '../../ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { useModalStore } from '$/stores/useModalStore';
import { collectionWithoutUserIdSchema } from '$/schemas/collections-schema';
import { createCollection } from '$/lib/fetchs';

type FormData = z.infer<typeof collectionWithoutUserIdSchema>;

export const CreateCollection = ({ userId }: { userId: string }) => {
  const { modals, toggleModal } = useModalStore();
  console.log(modals['c'])
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
    toggleModal('c')
    reset();
  };

  return (
    <>
      {modals['c'] ? (
        <Modal
          title='Créer une collection'
          subtitle='La collection vous permet de regrouper vos objets collectionnés'
          modalId='c'
        >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__control}>
              <Input
                label='Nom de la collection'
                id='name'
                placeholder='Vinyles de taylor swift'
                {...register('name')}
              />
            </div>
            <div className={styles.form__control}>
              <Input
                label='Description'
                id='description'
                placeholder='Une collection de vinyles de taylor swift'
                {...register('description')}
              />
            </div>
            <div className={styles.form__control}>
              <Select id='status' {...register('status')}>
                <option value='PUBLIC'>Publique</option>
                <option value='PRIVATE'>
                  Privée (visible uniquement par vous)
                </option>
              </Select>
            </div>
            <div className={styles.warning_status}>
              <Paragraph variant='hightlight'>En fonction du statut, votre collection sera visible par tout le
                monde ou seulement par vous sur votre profil.
              </Paragraph>
            </div>
            {isDirty && !isValid && (
              <Paragraph variant='p' isError>
                Veuillez remplir tous les champs
              </Paragraph>
            )}
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
