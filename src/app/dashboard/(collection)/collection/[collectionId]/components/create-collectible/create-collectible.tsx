'use client';
import styles from './create-collectible.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button, Input, Modal, Paragraph } from '$/components/ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { useModalStore } from '$/stores/use-odalStore';
import { createCollectiblesSchema } from '$/schemas/collectibles-schema';
import { createCollectible } from '$/lib/fetchs';
import { useMutation } from '@tanstack/react-query';

type FormData = z.infer<typeof createCollectiblesSchema>;
const MODAL_KEY = 'create-collectible';

export const CreateCollectible = ({
  userId,
  collectionId,
}: {
  userId: string;
  collectionId: string;
}) => {
  const { modals, toggleModal } = useModalStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(createCollectiblesSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) => createCollectible(data, userId),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      router.refresh();
      toggleModal(MODAL_KEY);
      reset();
    },
  });

  const onSubmit = async (data: FormData) => {
    const datas = {
      ...data,
      userId: userId,
      collectionId: collectionId,
      dragPosition: 1,
    };
    mutate(datas);
  };

  return (
    <>
      {modals[MODAL_KEY] ? (
        <Modal
          title='Créer un objet collectionné'
          subtitle='L’objet collectionné vous permet de regrouper vos objets collectionnés'
          modalId={MODAL_KEY}
          size='medium'
        >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              label='Nom de l’objet collectionné'
              id='name'
              placeholder='Red Taylor’s Version'
              {...register('name')}
            />
            <Input
              label='Description'
              id='description'
              placeholder='Red Taylor’s Version est le quatrième album studio de la chanteuse américaine Taylor Swift, sorti le 9 novembre 2012 sur le label Big Machine Records. Il s’agit d’une réédition de son album Red, sorti en 2012, contenant 30 titres, dont 6 inédits.'
              {...register('description')}
            />
            <Select label='Status' id='status' {...register('status')}>
              <option value='ACQUIRED'>Acquis</option>
              <option value='PLANNED'>Manquant</option>
            </Select>

            <Button
              type='submit'
              disabled={!isValid || isSubmitting || isPending}
              aria-disabled={!isValid || isSubmitting || isPending}
            >
              Créer l&apos;objet
            </Button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
