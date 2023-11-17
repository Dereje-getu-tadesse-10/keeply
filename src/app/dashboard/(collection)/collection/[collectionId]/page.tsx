import styles from './page.module.css';
import { Session } from 'next-auth';
import { notFound } from 'next/navigation';
import { auth } from '$/lib/auth';
import { CollectionsManager } from '$/server/collections-manager';
import { getCollectibles } from '$/server/collectibles';
import { CollectionHeader, DndContainer } from '$/components/dashboard';
import { UpdateCollection } from './components/update-collection/update-collection';
import { CreateCollectible } from './components/create-collectible/create-collectible';
import { UpdateCollectible } from './components/update-collectible/update-collectible';

import type { Metadata, ResolvingMetadata } from 'next';

type PageProps = {
  params: {
    collectionId: string;
  };
};

export async function generateMetadata(
  { params: { collectionId } }: PageProps,
  parent: ResolvingMetadata
) {
  const user: Session | null = await auth();

  const collection = await new CollectionsManager().getCollection(
    collectionId,
    user?.user.id
  );

  if (!collection) notFound();

  return {
    ...parent,
    title: `${collection.name}`,
  };
}

const Page = async ({ params: { collectionId } }: PageProps) => {
  const user: Session | null = await auth();

  const userId = user?.user.id;
  const collection = await new CollectionsManager().getCollection(
    collectionId,
    userId
  );
   const collectibles = await getCollectibles(collectionId);

  if (!collection) notFound();

  return (
    <section className={styles.collections}>
      <CollectionHeader collection={collection} />
      <UpdateCollection collection={collection} />
      <DndContainer collectibles={collectibles} userId={userId} />
      <CreateCollectible userId={userId} collectionId={collectionId} />
      <UpdateCollectible userId={userId} collectionId={collectionId} />
    </section>
  );
};

export default Page;
