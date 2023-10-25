import { z } from "zod"
import { collectionWithoutUserIdSchema, updateCollectionSchema } from "$/schemas/collections-schema"

// Types
type CreateCollection = z.infer<typeof collectionWithoutUserIdSchema>;
type UpdateCollection = z.infer<typeof updateCollectionSchema>;

// Fonctions d'appel à l'API pour créer, une collection
const createCollection = async (data: CreateCollection, userId: string) => {
    const response = await fetch(`/api/collections/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...data,
            userId: userId,
        }),
    })

    return await response.json()
}

// Fonctions d'appel à l'API pour mettre à jour une collection
const updateCollection = async (data: UpdateCollection, collectionId: string) => {
    const response = await fetch(`/api/collections/update/${collectionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await response.json()
}

// Fonctions d'appel à l'API pour supprimer une collection
const deleteCollection = async (collectionId: string, userId: string) => {
    const response = await fetch(`/api/collections/delete/${collectionId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId
        }),
    })
    return await response.json()
}

// Export
export { updateCollection, deleteCollection, createCollection }