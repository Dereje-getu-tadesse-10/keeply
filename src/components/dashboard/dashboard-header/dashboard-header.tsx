'use client';
import { Button, Heading, Paragraph } from '$/components/ui';
import { useModalStore } from '$/stores/useModalStore';

export const DashboardHeader = ({ lenght }: { lenght: number }) => {
  const { toggleModal } = useModalStore();
  return (
    <>
      <Heading as='h1' variant='h1'>
        Mes collections
      </Heading>
      <Paragraph variant='hightlight'>
        Créez vos collections et ajoutez les objets que vous souhaitez
        collectionner.
      </Paragraph>
      <Paragraph variant='hightlight'>
        <strong>{lenght}</strong> collections créées
      </Paragraph>
      <Button
        size={'small'}
        intent={'primary'}
        onClick={() => toggleModal('create-collection')}
      >
        Créer une collection
      </Button>
    </>
  );
};
