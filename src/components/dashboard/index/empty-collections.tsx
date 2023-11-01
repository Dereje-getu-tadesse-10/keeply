"use client"
import { Button, Heading } from '$/components/ui';
import { useModalStore } from '$/stores/useModalStore';

export const EmptyCollections = () => {
    const { toggleModal } = useModalStore();
    return (
        <div className='no-collection'>
            <Heading as='h3' variant='h3'>
                Mince ! On dirait bien que vous n'avez pas encore de collection.
            </Heading>
            <Button
                size={'medium'}
                onClick={() => {
                    toggleModal('create-collection');
                }}
            >
                Créer une collection
            </Button>
        </div>
    );
};
