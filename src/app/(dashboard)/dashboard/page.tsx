import { auth } from '$/lib/auth';
import { getCollections } from '$/server/collections';
import { Session } from 'next-auth';
import { Badge, ButtonLink, Card, Heading, Paragraph, Separator } from '$/components/ui';
import { Collections } from '$/components/commons';

const Page = async () => {
  const user: Session | null = await auth();

  const collections = await getCollections(user?.user.id)

  return (
    <>
      <Heading as='h1' variant='h1'>
        Mes collections
      </Heading>
      <Paragraph variant='hightlight'>
        Créez vos collections et ajoutez les objets que vous souhaitez collectionner.
      </Paragraph>
      <Paragraph variant='hightlight'>
        <b>{collections.length}</b>
        {' '}
        collections créées
      </Paragraph>
      <Separator />
      <Collections collections={collections} />
    </>
  );
};

export default Page;
