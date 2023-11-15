import { CollectionsList } from '$/components/collections/collection-list/collections-list';
import { EmptyCollections } from '$/components/collections/empty-collection/empty-collections';
import { Collection } from '$/server/collections-manager';

type CollectionsProps = Collection[];

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
