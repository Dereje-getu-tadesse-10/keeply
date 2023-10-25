import * as z from 'zod';

const collectionsSchema = z.object({
  name: z
    .string()
    .min(1, 'Le nom de la collection est trop court')
    .max(50, 'Le nom de la collection est trop long'),
  description: z
    .string()
    .min(1, 'La description est obligatoire')
    .max(500, 'La description est trop longue'),
  status: z.enum(['PUBLIC', 'PRIVATE']),
  userId: z.string(),
});

const collectionWithoutUserIdSchema = collectionsSchema.omit({ userId: true });

const collectionWithIdSchema = collectionsSchema.extend({
  collectionId: z.string(),
});

const updateCollectionSchema = collectionsSchema.partial();

export {
  collectionsSchema,
  collectionWithoutUserIdSchema,
  collectionWithIdSchema,
  updateCollectionSchema,
};
