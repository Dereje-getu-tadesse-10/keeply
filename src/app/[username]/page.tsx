import { Paragraph, Heading } from '$/components/ui';
import { UserManager } from '$/server/user-managers';
import { notFound } from 'next/navigation';
import { UserCollections } from './components/user-collections';
import { ResolvingMetadata } from 'next';
import styles from './page.module.css';

export async function generateMetadata(
  { params }: { params: { username: string } },
  parent: ResolvingMetadata
) {
  const currentUser = params.username;

  // const userProfil = await getUserAndCollections(currentUser);
  const userProfil = await new UserManager().getUserAndCollections(currentUser);

  if (!userProfil) notFound();

  return {
    ...parent,
    title: userProfil.name,
  };
}

const Page = async ({ params }: { params: { username: string } }) => {
  const currentUser = params.username;

  const userProfil = await new UserManager().getUserAndCollections(currentUser);
  if (!userProfil) notFound();

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
          {userProfil?.collections?.length ? (
            <Heading as='h2' variant='h2'>
              Collections
            </Heading>
          ) : (
            <Heading as='h3' variant='h3'>
              Ouups ! Cette personne n&apos;a pas encore de collection
            </Heading>
          )}
          <div className={styles.collections__grid}>
            <UserCollections userProfil={userProfil} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
