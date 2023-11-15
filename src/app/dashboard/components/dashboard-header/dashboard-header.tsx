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
        Commencez à créer vos collections et ajoutez-y les objets que vous aimez
        collectionner !
      </Paragraph>
      <Paragraph variant='hightlight'>
        <strong>{lenght}</strong> ollections créées.
      </Paragraph>
      <Button
        size={'small'}
        intent={'primary'}
        onClick={() => toggleModal('create-collection')}
      >
        Créez une collection
      </Button>
    </>
  );
};
