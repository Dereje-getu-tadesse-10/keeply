'use client';
import { useState } from 'react';
import { Card, Modal, Paragraph } from '$/components/ui';
import { Collectible, Collection } from '@prisma/client';
import { CollectionCard } from '$/components/collections/collection-card/collection-card';
import { useModalStore } from '$/stores/use-odalStore';
import styles from './user-collections.module.css';

const MODAL_KEY = 'view-collection';

export const UserCollections = ({ userProfil }: any) => {
  const { modals, toggleModal } = useModalStore();
  const [selectedCollection, setSelectedCollection] = useState<any>(null);

  return (
    <>
      {userProfil.collections.map((collection: Collection) => (
        <Card
          onClick={() => {
            toggleModal(MODAL_KEY);
            setSelectedCollection(collection);
          }}
          key={collection.id}
        >
          <CollectionCard authenticated={false} collection={collection} />
        </Card>
      ))}
      {modals[MODAL_KEY] && (
        <Modal
          modalId={MODAL_KEY}
          title={selectedCollection.name}
          subtitle={selectedCollection.description}
        >
          {/* {selectedCollection.length > 0 ? (
            selectedCollection.items.maps((collectible: Collectible) => (
              <ul className={styles.collectible} key={collectible.id}>
                <li>
                  <p>{collectible.name}</p>
                  <p>{collectible.description}</p>
                  <p>
                    <strong>
                      {collectible.status === 'ACQUIRED'
                        ? 'Acquéri'
                        : 'Manquant'}{' '}
                    </strong>
                    dans la collection.
                  </p>
                  {collectible.id !==
                    selectedCollection.items[
                      selectedCollection.items.length - 1
                    ].id && <hr />}
                </li>
              </ul>
            ))
          ) : (
            <Paragraph>
              Ouups ! cette collection est vide pour le moment.
            </Paragraph>
          )} */}

          {selectedCollection.items.length > 0 ? (
            selectedCollection.items.map((collectible: Collectible) => (
              <ul className={styles.collectible} key={collectible.id}>
                <li>
                  <p>{collectible.name}</p>
                  <p>{collectible.description}</p>
                  <p>
                    <strong>
                      {collectible.status === 'ACQUIRED'
                        ? 'Acquéri'
                        : 'Manquant'}{' '}
                    </strong>
                    dans la collection.
                  </p>
                  {collectible.id !==
                    selectedCollection.items[
                      selectedCollection.items.length - 1
                    ].id && <hr />}
                </li>
              </ul>
            ))
          ) : (
            <Paragraph>
              Ouups ! cette collection est vide pour le moment.
            </Paragraph>
          )}
        </Modal>
      )}
    </>
  );
};
