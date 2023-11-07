import { Card, Paragraph } from '$/components/ui';
import { getUserAndCollections } from '$/server/users';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { Heading } from '$/components/ui';
import { UserCollection } from '$/components/dashboard/user-page-collection/user-page-collection';

const Page = async ({ params }: { params: { username: string } }) => {
  const currentUser = params.username;

  const userProfil = await getUserAndCollections(currentUser);
  if (!userProfil) notFound();
  console.log(userProfil.collections.length);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div>
          <div
            style={{
              height: '120px',
              width: '120px',
              borderRadius: '50%',
              backgroundImage: `${userProfil.backgroundColor?.colorCode}`,
            }}
          ></div>
          <div>
            <Heading as='h2' variant='h2'>
              {userProfil.name}
            </Heading>
            <Paragraph variant='hightlight'>{userProfil.description}</Paragraph>
          </div>
        </div>
        <div className={styles.collections}>
          {userProfil.collections.length > 0 ? (
            <Heading as='h2' variant='h2'>
              Collections
            </Heading>
          ) : (
            <>
              <Heading as='h3' variant='h3'>
                Ouups ! Cette personne n'a pas encore de collection
              </Heading>
            </>
          )}
          <div className={styles.collections__grid}>
            <UserCollection userProfil={userProfil} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
