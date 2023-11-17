'use client';
import styles from './auth.module.css';
import { Button, Paragraph, Separator } from '$/components/ui';
import { Input } from '$/components/ui/input/input';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GithubIcon, GoogleIcon } from '$/components/icons';
import { Sparkles } from 'lucide-react';

const schema = z.object({
  email: z
    .string()
    .email({ message: 'Email invalide' })
    .min(1, "L'email est obligatoire"),
});

type FormData = z.infer<typeof schema>;

export const Auth = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit = async (data: FormData) => {
    await signIn('email', { email: data.email });
  };

  const handleGoogleSignIn = () => {
    signIn('google');
  };

  const handleGithubSignIn = () => {
    signIn('github');
  };

  return (
    <section className={styles.auth}>
      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          placeholder='Email'
          id='email'
          defaultValue={sessionStorage.getItem('emailForSignIn') || ''}
          {...register('email')}
          error={errors.email?.message}
        />
        {isSubmitting ? (
          <Button type='submit' intent={'primary'} disabled={isSubmitting}>
            Chargement ....
          </Button>
        ) : (
          <Button type='submit' intent={'primary'} disabled={isSubmitting}>
            <Sparkles size={'20'} /> Recevoir le lien magique
          </Button>
        )}
      </form>

      <Separator />

      <Button intent={'secondary'} onClick={handleGoogleSignIn}>
        <GoogleIcon />
        Se connecter avec Google
      </Button>
      <Button onClick={handleGithubSignIn} intent={'secondary'}>
        <GithubIcon />
        Se connecter avec Github
      </Button>
    </section>
  );
};
