import { auth } from '$/lib/auth';
import { getCollections } from '$/server/collections';
import { Session } from 'next-auth';
import { Badge, ButtonLink, Card, Heading, Paragraph, Separator } from '$/components/ui';

const Page = async () => {
  const user: Session | null = await auth();

  const collections = await getCollections(user?.user.id);

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
      <section>
        {collections.length > 0 ?
          <>
            {collections.map((collection) => (
              <Card key={collection.id}>
                <Heading as='h3' variant='h3'>
                  {collection.name}
                </Heading>
                <Paragraph variant='hightlight'>
                  {collection.description}
                </Paragraph>
                <Badge intent={collection.status ? 'primary' : 'secondary'}>
                  {collection.status ? 'Public' : 'Privée'}
                </Badge>
                <ButtonLink href={`/dashboard/collection/${collection.id}`} size={'small'}>
                  Voir la collection
                </ButtonLink>
              </Card>
            ))}
          </> : (
            <div>
              <Heading as='h3' variant='h3'>
                😭 Vous n'avez pas encore de collection
              </Heading>
              <Paragraph variant='hightlight'>
                Créez votre première collection !
              </Paragraph>
            </div>
          )}

      </section>
    </>
  );
};

export default Page;
