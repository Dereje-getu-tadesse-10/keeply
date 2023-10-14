'use client'
import { addCollection } from '$/lib/server-actions'
import { ButtonState } from './form-state'
export const CreateCollection = async ({ userId }: { userId: string }) => {
  const formStatus = async (formData: FormData) => {
    const res = await addCollection(formData)
    if (res.message) {
      console.log(res.message)
    }
  }
  return (
    <div>
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
    </div>
  )
}
