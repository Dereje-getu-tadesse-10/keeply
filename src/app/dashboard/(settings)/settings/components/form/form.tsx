'use client';
import { Button, Input, Paragraph, Separator, TextArea } from '$/components/ui';
import { useQuery } from '@tanstack/react-query';
import { checkUsername, updateProfil } from '$/lib/fetchs';
import { upddateUsernameSchema } from '$/schemas/users-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useDebounce } from 'use-debounce';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { BackgroundColors } from '@prisma/client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './form.module.css';

type FormValue = z.infer<typeof upddateUsernameSchema>;

type Props = {
  userId: string;
  userInfos: {
    description: string | null;
    username: string | null;
    id: string;
    backgroundColor: BackgroundColors | null;
    name: string | null;
  };
  backgroundColors: BackgroundColors[];
};

export const Form = ({ userId, userInfos, backgroundColors }: Props) => {
  const router = useRouter();

  const [selectedBackground, setSelectedBackground] = useState(
    userInfos?.backgroundColor?.id || ''
  );

  const {
    handleSubmit,
    watch,
    register,
    formState: { isSubmitting, isValid },
    setValue,
  } = useForm<FormValue>({
    resolver: zodResolver(upddateUsernameSchema),
    defaultValues: {
      username: userInfos.username === null ? '' : userInfos.username,
      description:
        userInfos.description === '' ? '' : (userInfos.description as string),
      backgroundColor: userInfos.backgroundColor?.id || '',
      name: userInfos.name === null ? '' : userInfos.name,
    },
  });

  const [username] = useDebounce(watch('username'), 1000);

  const { data, isLoading } = useQuery({
    queryKey: ['check-username', username],
    queryFn: () =>
      checkUsername(
        username as string,
        userInfos.username === null ? '' : userInfos.username
      ),
    enabled: username !== undefined,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValue) => updateProfil(data),
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
    },
  });

  useEffect(() => {
    if (selectedBackground) {
      setValue('backgroundColor', selectedBackground, { shouldDirty: true });
    }
  }, [selectedBackground, setValue]);

  const onSubmit = (data: FormValue) => {
    const datas = {
      ...data,
      userId: userId,
      currentUsername: userInfos.username === null ? '' : userInfos.username,
      backgroundColor: selectedBackground,
    };
    mutate(datas);
  };

  return (
    <section>
      <Separator />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Paragraph>Choissisez une couleur de fond</Paragraph>
          <div className={styles.backgrounds_container}>
            {backgroundColors.map((color) => (
              <div
                key={color.id}
                onClick={() => {
                  setSelectedBackground(color.id);
                }}
              >
                <div
                  style={{
                    backgroundImage: `${color.colorCode}`,
                    border:
                      selectedBackground === color.id
                        ? '2px solid #000'
                        : `2px solid #fff`,
                    height: ' 50px',
                    width: ' 70px',
                    borderRadius: '8px',
                  }}
                ></div>
                <Paragraph variant='hightlight'>{color.name}</Paragraph>
              </div>
            ))}
          </div>
        </div>
        <div>
          {isLoading ? null : <Paragraph>{data?.data?.message}</Paragraph>}
          <Input
            label='Votre identifiant'
            placeholder='mon-super-pseudo'
            id='username'
            {...register('username')}
          />
          <Input
            label='Votre prénom'
            placeholder='Votre prénom'
            id='name'
            {...register('name')}
          />

          <TextArea
            label='Bio'
            placeholder='Décrivez-vous en quelques mots...'
            id='bio'
            rows={5}
            {...register('description')}
          />
          <Button
            type='submit'
            size={'medium'}
            disabled={!isValid || isSubmitting || isPending}
            aria-disabled={!isValid || isSubmitting || isPending}
          >
            {isPending
              ? 'Mise à jour du profil...'
              : 'Mettre à jour mon profil'}
          </Button>
        </div>
      </form>
    </section>
  );
};
