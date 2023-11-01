import styles from "./page.module.css"
import { auth } from '$/lib/auth';
import { Session } from 'next-auth';
import { getGetCollection } from '$/server/collections';
import { getCollectibles } from '$/server/collectibles';
import { notFound } from 'next/navigation';
import { CollectibleContainer, CollectionCard } from '$/components/commons';
import { CreateCollectible, UpdateCollection } from '$/components/forms';
import { Heading } from "$/components/ui";

const Page = async ({ params }: { params: { collectionId: string } }) => {
  const user: Session | null = await auth();

  const currentCollection = params.collectionId;
  const collection = await getGetCollection(currentCollection, user?.user.id);
  const collectibles = await getCollectibles(currentCollection);

  if (!collection) notFound();
  console.log(collectibles);
  return (
    <section className={styles.collections}>
      <CollectionCard collection={collection} />
      <Heading as='h3' variant='h3'>
        Mes items
      </Heading>
      <CollectibleContainer collectibles={collectibles} userId={user?.user.id} />
      <UpdateCollection collection={collection} />
      <CreateCollectible userId={user?.user.id} collectionId={currentCollection} />
    </section>
  );
};

export default Page;
