import { Card, Paragraph } from '$/components/ui';
import { getUserAndCollections } from '$/server/users';
import { Button } from '@jsx-email/all';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { Heading } from '$/components/ui';
import { CollectibleCard, CollectionCard } from '$/components/dashboard';

const Page = async ({ params }: { params: { username: string } }) => {
  const currentUser = params.username;

  const userProfil = await getUserAndCollections(currentUser);
  if (!userProfil) notFound();
  console.log(userProfil);
  return (
    <main
    className={styles.main}
      style={{
      }}
    >
      <section className={styles.section}>
        <div>
          <div
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "50%",
              backgroundImage: `${userProfil.backgroundColor?.colorCode}`,
            }}
          ></div>
          <div>
            <Heading as="h2" variant='h2'>
              {userProfil.name}
            </Heading>
            <Paragraph variant='hightlight'>{userProfil.description}</Paragraph>
        </div>
      </div>
      <div className={styles.collections}>
        <Heading as="h1" variant='h1'>
          Collections
        </Heading>
        <div className={styles.collections__grid}>
          {userProfil.collections.map((collection) => (
            <Card>
            <CollectionCard
              key={collection.id}
              authenticated={false}
              collection={collection}
              />
            </Card>
          ))}
        </div>
      </div>
      </section>
    </main>
  );
};

export default Page;
