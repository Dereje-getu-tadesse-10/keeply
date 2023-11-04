import { z } from 'zod';
import {
  collectionWithoutUserIdSchema,
  updateCollectionSchema,
} from '$/schemas/collections-schema';
import {
  createCollectiblesSchema,
  updateCollectibleSchema,
} from '$/schemas/collectibles-schema';

// Types
type CreateCollection = z.infer<typeof collectionWithoutUserIdSchema>;
type UpdateCollection = z.infer<typeof updateCollectionSchema>;
type CreateCollectible = z.infer<typeof createCollectiblesSchema>;
type UpdateCollectible = z.infer<typeof updateCollectibleSchema>;
type UpdateProfil = z.infer<typeof updateCollectibleSchema>;

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
  });

  return await response.json();
};

// Fonctions d'appel à l'API pour mettre à jour une collection
const updateCollection = async (
  data: UpdateCollection,
  collectionId: string
) => {
  const response = await fetch(`/api/collections/${collectionId}/update/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Fonctions d'appel à l'API pour supprimer une collection
const deleteCollection = async (collectionId: string, userId: string) => {
  const response = await fetch(`/api/collections/${collectionId}/delete/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
    }),
  });
  return await response.json();
};

// Fonction d'appel pour mettre à jour les positions des collections
const updateCollectiblesPostions = async (userId: string, updates: any) => {
  const response = await fetch(`/api/collectibles/update-drag-positions`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      updates: updates,
    }),
  });
};

// Fonction d'appel pour créer un collectible
const createCollectible = async (data: CreateCollectible, userId: string) => {
  const response = await fetch(`/api/collectibles/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      userId: userId,
    }),
  });

  return await response.json();
};

// Fonction d'appel pour mettre à jour un collectible
const updateCollectiblePut = async (
  data: UpdateCollectible,
  collectibleId: string
) => {
  const response = await fetch(`/api/collectibles/${collectibleId}/update/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Fonction d'appel pour obtenir un collectible

const getCollectible = async (collectibleId: string | null, userId: string) => {
  const response = await fetch(
    `/api/collectibles/${collectibleId}/${userId}/`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );
  return await response.json();
};

// Fonction d'appel pour supprimer un collectible
const deleteColletible = async (collectibleId: string, userId: string) => {
  const resposne = await fetch(`/api/collectibles/${collectibleId}/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
    }),
  });
  return await resposne.json();
};

// Fonction d'appel pour mettre à jour le profil
const updateProfil = async (data: UpdateProfil) => {
  const response = await fetch(`/api/users/update/profil`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Fonction d'appel pour vérifier si un nom d'utilisateur est déjà utilisé

const checkUsername = async (username: string | null, currentUsername:string |null) => {
  if(username === currentUsername) return
  const response = await fetch(`/api/users/check-username`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      currentUsername
    }),
  });
  return await response.json();
};

// Export
export {
  updateCollection,
  deleteCollection,
  createCollection,
  updateCollectiblesPostions,
  createCollectible,
  updateCollectiblePut,
  getCollectible,
  deleteColletible,
  updateProfil,
  checkUsername,
};
