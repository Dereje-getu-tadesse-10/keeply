import { auth } from '$/lib/auth';
import { getCollections } from '$/lib/queries';
import { Session } from 'next-auth';
import { CreateCollection } from '$/components/forms';
import Link from 'next/link';
const Page = async () => {
  const user: Session | null = await auth();

  const collections = await getCollections(user?.user.id);

  return (
    <main>
      <CreateCollection userId={user?.user.id} />
      {collections.map((collection) => (
        <div key={collection.id}>
         <Link key={collection.id} href={`/dashboard/collection/${collection.id}`}>
          {collection.name}
        </Link>
        <Link href={`/dashboard/collection/${collection.id}/update`}>
          Mettre à jour 
        </Link>
        </div>
       
      ))}
    </main>
  );
};

export default Page;
