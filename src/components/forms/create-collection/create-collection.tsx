import { addCollection } from '$/lib/server-actions'

export const CreateCollection = async ({ userId }: { userId: string }) => {
  return (
    <div>
      <form action={addCollection}>
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
        <button type="submit">Create collection</button>
      </form>
    </div>
  )
}
