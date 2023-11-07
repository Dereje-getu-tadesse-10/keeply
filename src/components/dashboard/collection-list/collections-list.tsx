import { Badge, ButtonLink, Card, Heading, Paragraph } from '$/components/ui';
import { Collection } from '@prisma/client';

export const CollectionsList = ({
  collections,
}: {
  collections: Partial<Collection>[];
}) => (
  <section className='collections'>
    {collections.map((collection) => (
      <Card key={collection.id}>
        <Heading as='h3' variant='h3'>
          {collection.name}
        </Heading>
        <Paragraph variant='hightlight'>{collection.description}</Paragraph>
        <Badge intent={collection.status ? 'primary' : 'secondary'}>
          {collection.status === 'PUBLIC' ? 'Publique' : 'Privée'}
        </Badge>
        <ButtonLink
          href={`/dashboard/collection/${collection.id}`}
          size={'small'}
        >
          Voir la collection
        </ButtonLink>
      </Card>
    ))}
  </section>
);
