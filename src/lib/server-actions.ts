'use server'
import { z } from 'zod'
import { prisma } from '$/lib/prisma'
import { revalidatePath } from 'next/cache'

const addToCollectionSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  userId: z.string().min(1),
  status: z.enum(['PUBLIC', 'PRIVATE']),
})

const deleteCollectionSchema = z.object({
  id: z.string().min(1),
})

export const addCollection = async (e: FormData) => {
  const collection = addToCollectionSchema.parse({
    name: e.get('name'),
    description: e.get('description'),
    userId: e.get('userId'),
    status: e.get('status'),
  })
  try {
    await prisma.collection.create({
      data: {
        name: collection.name,
        userId: collection.userId,
        status: collection.status,
        description: collection.description,
      },
    })
    revalidatePath('/dashboard')
    return { message: `La collection ${collection.name} a bien été créée` }
  } catch (e) {
    return { message: `La collection n'a pas pu être créée` }
  }
}

export const deleteCollection = async (e: FormData) => {
  const collection = deleteCollectionSchema.parse({
    id: e.get('id'),
  })
  try {
    console.log(collection.id)
    await prisma.collection.delete({
      where: {
        id: collection.id,
      },
    })
    revalidatePath('/dashboard')
    return { message: `La collection a bien été supprimée ${collection.id}` }
  } catch (e) {
    return { message: `La collection n'a pas pu être supprimée` }
  }
}
