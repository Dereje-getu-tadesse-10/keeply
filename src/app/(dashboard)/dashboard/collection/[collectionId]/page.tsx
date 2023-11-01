import { auth } from '$/lib/auth';
import { Session } from 'next-auth';
import { getGetCollection } from '$/server/collections';
import { getCollectibles } from '$/server/collectibles';
import { notFound } from 'next/navigation';
import { CollectibleContainer, CollectionCard } from '$/components/commons';
import { UpdateCollection } from '$/components/forms';

const Page = async ({ params }: { params: { collectionId: string } }) => {
  const user: Session | null = await auth();

  const currentCollection = params.collectionId;
  const collection = await getGetCollection(currentCollection, user?.user.id);
  const collectibles = await getCollectibles(currentCollection);

  if (!collection) notFound();

  return (
    <main>
      <CollectionCard collection={collection} />
      <CollectibleContainer
        collectibles={collectibles}
        userId={user?.user.id}
      />
      <UpdateCollection
        collection={collection}
      />
    </main>
  );
};

export default Page;
