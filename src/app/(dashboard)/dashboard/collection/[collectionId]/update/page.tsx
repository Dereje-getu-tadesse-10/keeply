import { auth } from '$/lib/auth';
import { Session } from 'next-auth';
import { getGetCollection } from '$/lib/queries';
import { notFound } from 'next/navigation';
import { UpdateCollection } from '$/components/forms/update-collection/update-collection';

const Page = async ({ params }: { params: { collectionId: string } }) => {
  const user: Session | null = await auth();

  const currentCollection = params.collectionId;
  const collection = await getGetCollection(currentCollection, user?.user.id);

  if (!collection) notFound();

  return <UpdateCollection collection={collection} />;
};

export default Page;
