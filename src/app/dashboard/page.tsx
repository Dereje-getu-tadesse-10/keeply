import { auth } from '$/lib/auth';
import { CollectionsManager } from '$/server/collections-manager';
import { Session } from 'next-auth';
import { Separator } from '$/components/ui';
import { CreateCollection } from './components/create-collection/create-collection';
import { DashboardHeader } from './components/dashboard-header/dashboard-header';
import { Collections } from './components/collections/collections';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tableau de bord - Keeply',
};

const Page = async () => {
  const user: Session | null = await auth();

  const collections = await new CollectionsManager().getCollections(
    user?.user.id
  );

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
