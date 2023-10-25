import { auth } from '$/lib/auth';
import { Session } from 'next-auth';
import { getCollectibles, getGetCollection } from '$/lib/queries';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { collectionId: string } }) => {
  const user: Session | null = await auth();

  const currentCollection = params.collectionId;
  const collection = await getGetCollection(currentCollection, user?.user.id);
  const collectibles = await getCollectibles(currentCollection);

  if (!collection) notFound();
  console.log(collection, 'ma collection');
  console.log(collectibles, 'mes collectibles');
  return <main></main>;
};

export default Page;
