import * as z from 'zod';

const collectionSchema = z.object({
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

const collectionWithoutUserIdSchema = collectionSchema.omit({ userId: true });

const collectionWithIdSchema = collectionSchema.extend({
  collectionId: z.string(),
});

const updateCollectionSchema = collectionSchema.partial();

export {
  collectionSchema,
  collectionWithoutUserIdSchema,
  collectionWithIdSchema,
  updateCollectionSchema,
};
