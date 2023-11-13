'use client';
import styles from './update-collectible.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button, Input, Modal, Paragraph, TextArea } from '$/components/ui';
import { toast } from 'react-hot-toast';
import { Select } from '$/components/ui/select/select';
import { useModalStore } from '$/stores/useModalStore';
import { updateCollectibleSchema } from '$/schemas/collectibles-schema';
import {
  updateCollectiblePut,
  getCollectible,
  deleteColletible,
} from '$/lib/fetchs';
import { useCollectibleId } from '$/stores/useCollectibleId';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CollectibleCard } from '$/components/dashboard';
import { useMutation } from '@tanstack/react-query';
import { LoadingCollectible } from '$/components/collectibles/loading/loading';
import { LoadingUI } from '$/components/loading/loading';

type FormData = z.infer<typeof updateCollectibleSchema>;

const MODAL_KEY = 'update-collectible';

export const UpdateCollectible = ({
  userId,
  collectionId,
}: {
  userId: string;
  collectionId: string | null;
}) => {
  const { modals, toggleModal } = useModalStore();
  const { collectibleId } = useCollectibleId();
  const router = useRouter();

  let isLoading = true;

  const { data } = useQuery({
    queryKey: ['collectible', collectibleId],
    queryFn: () => getCollectible(collectibleId, userId),
    enabled: !!collectibleId,
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<FormData>({
    resolver: zodResolver(updateCollectibleSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) =>
      updateCollectiblePut(data, collectibleId as string),
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
      toggleModal(MODAL_KEY);
      reset();
    },
  });

  const onSubmit = async (data: FormData) => {
    const datas = {
      ...data,
      userId,
      collectionId: collectionId as string,
      dragPosition: 1,
    };
    mutate(datas);
  };

  const handleDelete = async () => {
    const data = await deleteColletible(collectibleId as string, userId);
    toast.success(data.message);
    router.refresh();
    toggleModal(MODAL_KEY);
  };

  useEffect(() => {
    if (data) {
      reset({
        name: data.data.name,
        description: data.data.description,
        status: data.data.status,
      });
    }
  }, [data, reset]);

  return (
    <>
      {modals[MODAL_KEY] ? (
        <Modal
          title={'Modifier'}
          subtitle="L'objet collectionné sera modifié"
          modalId={MODAL_KEY}
          size='medium'
        >
          {isLoading ? (
            <div className={styles.loading__container}>
              <LoadingUI />
            </div>
          ) : (
            <>
              <CollectibleCard
                collectible={data.data}
                authenticated
                onDelete={handleDelete}
              />
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input
                  label='Nom de l’objet collectionné'
                  id='name'
                  placeholder='Red Taylor’s Version'
                  {...register('name')}
                  defaultValue={data?.data?.name}
                  error={errors && errors.name?.message}
                />
                <TextArea
                  label='Description'
                  id='description'
                  placeholder='Red Taylor’s Version est le quatrième album studio de la chanteuse américaine Taylor Swift, sorti le 9 novembre 2012 sur le label Big Machine Records. Il s’agit d’une réédition de son album Red, sorti en 2012, contenant 30 titres, dont 6 inédits.'
                  {...register('description')}
                  defaultValue={data?.data?.description}
                  error={errors && errors.description?.message}
                />
                <Select
                  label='Status'
                  id='status'
                  {...register('status')}
                  defaultValue={data?.data?.status}
                >
                  <option value='ACQUIRED'>Acquis</option>
                  <option value='PLANNED'>Manquant</option>
                </Select>
                <Paragraph isError>
                  {errors && errors.status?.message}{' '}
                </Paragraph>
                <Button
                  size={'small'}
                  type='submit'
                  disabled={!isValid || isSubmitting || isPending}
                  aria-disabled={!isValid || isSubmitting || isPending}
                >
                  Modifer l&apos;objet collectionné
                </Button>
              </form>
            </>
          )}
        </Modal>
      ) : null}
    </>
  );
};
