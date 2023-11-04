'use client';
import styles from './update-user.module.css';
import { Button, Heading, Input, Paragraph, TextArea } from '$/components/ui';
import { useQuery } from '@tanstack/react-query';
import { checkUsername, updateProfil } from '$/lib/fetchs';
import { upddateUsernameSchema } from '$/schemas/users-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useDebounce } from 'use-debounce';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type FormValue = z.infer<typeof upddateUsernameSchema>;

type Props = {
  userId: string;
  userInfos: {
    description:string | null,
    username:string | null,
    id:string
  };
}

export const UpdateUser = ({ userId, userInfos }: Props) => {

  const { handleSubmit, watch, register, formState: { isSubmitting, isDirty, isValid, errors } } = useForm<FormValue>({
    resolver: zodResolver(upddateUsernameSchema),
    defaultValues: {
        username: userInfos.username === null ? '' : userInfos.username,
        description: userInfos.description === '' ? '' : userInfos.description as string,
    }
  });

  const [username] = useDebounce(watch('username'), 1000);
  const { data, isLoading } = useQuery({
    queryKey: ['check-username', username],
    queryFn: () => checkUsername(username as string, userInfos.username === null ? '' : userInfos.username),
    enabled: username !== undefined,
  });

  const { mutate, isPending} = useMutation({
    mutationFn: (data: FormValue) => updateProfil(data),
    onSuccess: (data) => {
      toast.success(data.message);
    }
  });

  const onSubmit = (data: FormValue) => {
    const datas = {
      ...data,
      userId: userId,
      currentUsername: userInfos.username === null ? '' : userInfos.username,
    };
    mutate(datas);
  };

  return (
    <section className={styles.form__container}>
      <div className={styles.form_description}>
        <div>
        <Paragraph>
        Nom d&apos;utilisateur
      </Paragraph>
      <Paragraph variant='p'>
        Le nom d&apos;utilisateur est unique et vous permet de vous identifier sur votre page de profil.
      </Paragraph>
      <Paragraph variant='p'>
        Vous pouvez le modifier à tout moment.
      </Paragraph>
        </div>
    <div>
      <Paragraph>
        Bio
      </Paragraph>
      <Paragraph variant='p'>
        Décrivez-vous en quelques mots.
      </Paragraph>
      <Paragraph variant='p'>
        Vous pouvez modifier votre bio à tout moment.
      </Paragraph>
    </div>
      </div>
    
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Nom d'utilisateur"
            placeholder="mon-super-pseudo"
            id='username'
            {...register('username')}
          />
          {isLoading ? null : (
            <Paragraph>{data?.data?.message}</Paragraph>
          )}
        </div>
        <TextArea
          label='Bio'
          placeholder='Décrivez-vous en quelques mots...'
          id='bio'
          rows={5}
          {...register('description')}
        />
        <Button type='submit'
          size={"medium"}
          disabled={isSubmitting || !isDirty || !isValid || isPending}
        >
          {isPending ? 'Mise à jour du profil...' : 'Mettre à jour mon profil'}
        </Button>
      </form>
    </section>
  );
};
