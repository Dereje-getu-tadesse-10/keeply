import { CollectionsList } from '$/components/collections/collection-list/collections-list';
import { EmptyCollections } from '$/components/collections/empty-collection/empty-collections';
import { Collectible, CollectionStatus } from '@prisma/client';

type CollectionsProps = {
  id: string;
  name: string;
  description: string;
  status: CollectionStatus;
  userId: string;
  items: Collectible[];
}[];

export const Collections = ({
  collections,
}: {
  collections: CollectionsProps;
}) => {
  return (
    <>
      {collections.length > 0 ? (
        <CollectionsList collections={collections} />
      ) : (
        <EmptyCollections />
      )}
    </>
  );
};
