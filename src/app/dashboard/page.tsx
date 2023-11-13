import { auth } from '$/lib/auth';
import { getCollections } from '$/server/collections';
import { Session } from 'next-auth';
import { Separator } from '$/components/ui';
import { CreateCollection } from '$/components/forms';
import { CollectionsList } from '$/components/dashboard';
import { EmptyCollections } from '$/components/dashboard';
import { DashboardHeader } from '$/components/dashboard/dashboard-header/dashboard-header';
import { Collections } from '$/components/dashboard/collections/collections';

const Page = async () => {
  const user: Session | null = await auth();

  const collections = await getCollections(user?.user.id);

  return (
    <>
      <DashboardHeader lenght={collections.length} />
      <Separator />
      <Collections collections={collections} />
      <CreateCollection userId={user?.user.id} />
    </>
  );
};

export default Page;
