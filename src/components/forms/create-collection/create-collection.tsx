'use client'
import { addCollection } from '$/lib/server-actions'
import { ButtonState } from './form-state'
import toast from 'react-hot-toast'
import { useModalStore } from '$/stores/useModalStore'
import { Button, Modal } from '$/components/ui'

export const CreateCollection = ({ userId }: { userId: string }) => {
  const { isOpen, toggleModal } = useModalStore()
  const formStatus = async (formData: FormData) => {
    const res = await addCollection(formData)
    if (res.message) {
      toast.success(res.message, {
        icon: '👏',
      })
      toggleModal()
    }
  }

  return (
    <>
      <Button onClick={toggleModal}>Créer une collection</Button>
      {isOpen ? (
        <Modal title={'Créer une collection'}>
          <form action={formStatus}>
            <input name={'name'} type="text" placeholder="Collection name" />
            <input name={'userId'} type="hidden" value={userId} hidden={true} />
            <input
              name={'description'}
              type="text"
              placeholder="Collection description"
            />
            <select
              name={'status'}
              id="collectionType"
              placeholder="Collection type"
            >
              <option value="PUBLIC">Public</option>
              <option value="PRIVATE">Private</option>
            </select>
            <ButtonState />
          </form>
        </Modal>
      ) : null}
    </>
  )
}
