import { Button, Paragraph } from '$/components/ui';
import Link from 'next/link';
import styles from './description.module.css';

export const Description = ({
  userInfos,
}: {
  userInfos: { username: string | null };
}) => {
  return (
    <div>
      <div className={styles.description}>
        <div>
          <Paragraph>Nom d&apos;utilisateur</Paragraph>
          <Paragraph variant='p'>
            Le nom d&apos;utilisateur est unique et vous permet de vous
            identifier sur votre page de profil.
          </Paragraph>
          <Paragraph variant='p'>
            Vous pouvez le modifier à tout moment.
          </Paragraph>
        </div>
        <div>
          <Paragraph>Bio</Paragraph>
          <Paragraph variant='p'>Décrivez-vous en quelques mots.</Paragraph>
          <Paragraph variant='p'>
            Vous pouvez modifier votre bio à tout moment.
          </Paragraph>
        </div>
        <div>
          <Paragraph>Couleur de fond</Paragraph>
          <Paragraph variant='p'>
            Choissez une image de fond pour votre page de profil.
          </Paragraph>
          <Paragraph variant='p'>
            Vous pouvez modifier votre image de fond à tout moment.
          </Paragraph>
        </div>
        {userInfos.username === null ? null : (
          <div>
            <Paragraph>URL de votre page de profil</Paragraph>
            <Paragraph variant='p'>
              Votre page de profil est accessible via l&apos;url suivante :
            </Paragraph>
            <Paragraph variant='p'>
              <Link href={`/${userInfos.username}`}>
                https://keeply-neon.vercel.app/{userInfos.username}
              </Link>
            </Paragraph>
          </div>
        )}
      </div>
      <div className={styles.delete}>
        <Paragraph>Supprimer mon compte</Paragraph>
        <Paragraph variant='p'>
          Si vous supprimer votre compte, vous perdrez toutes vos données.
        </Paragraph>
        <Button intent='danger' size={'small'}>
          Supprimer mon compte
        </Button>
      </div>
    </div>
  );
};
