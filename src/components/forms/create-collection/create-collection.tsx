'use client';
import styles from './create-collection.module.css';
import { addCollection } from '$/lib/server-actions';
import { ButtonState } from './form-state';
import toast from 'react-hot-toast';
import { useModalStore } from '$/stores/useModalStore';
import { Button, Input, Modal } from '$/components/ui';

export const CreateCollection = ({ userId }: { userId: string }) => {
  const { isOpen, toggleModal } = useModalStore();
  const formStatus = async (formData: FormData) => {
    const res = await addCollection(formData);
    if (res.message) {
      toast.success(res.message, {
        icon: '👏',
      });
      toggleModal();
    }
  };

  return (
    <>
      <Button onClick={toggleModal}>Créer une collection</Button>
      {isOpen ? (
        <Modal title={'Créer une collection'}>
          <form className={styles.form} action={formStatus}>
            <Input name={'userId'} type='hidden' value={userId} hidden={true} />
            <div className={styles.form__group}>
              <Input
                name={'name'}
                type='text'
                placeholder='Titre de la collection'
              />
              <Input
                name={'description'}
                type='text'
                placeholder='Description de la collection'
              />
              <select
                name={'status'}
                id='collectionType'
                placeholder='Collection type'
              >
                <option value='PUBLIC'>Public</option>
                <option value='PRIVATE'>Private</option>
              </select>
            </div>

            <ButtonState />
          </form>
        </Modal>
      ) : null}
    </>
  );
};
