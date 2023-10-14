import { prisma } from '$/lib/prisma'
import { CollectionStatus } from '@prisma/client'
import { revalidatePath } from 'next/cache'

type Collection = {
  name: string
  description: string
  status: CollectionStatus
}

export const CreateCollection = async ({ userId }: { userId: string }) => {
  const addCollection = async (e: FormData) => {
    'use server'
    const collectionName = e.get('collectionName')?.toString()
    const collectionDescription = e.get('collectionDescription')?.toString()
    const collectionType = e.get('collectionType')?.toString()

    if (!collectionName || !collectionDescription || !collectionType)
      return console.log('Missing data')

    const collection: Collection = {
      name: collectionName,
      description: collectionDescription,
      status: collectionType === 'PUBLIC' ? 'PUBLIC' : 'PRIVATE',
    }
    const create = await prisma.collection.create({
      data: {
        name: collection.name,
        userId: userId,
        status: collection.status,
        description: collection.description,
      },
    })

    if (!create) return 'Error creating collection'
    revalidatePath('/dashboard')
    return 'Collection created'
  }

  return (
    <div>
      <form action={addCollection}>
        <input
          name={'collectionName'}
          type="text"
          placeholder="Collection name"
        />
        <input
          name={'collectionDescription'}
          type="text"
          placeholder="Collection description"
        />
        <select
          name={'collectionType'}
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
