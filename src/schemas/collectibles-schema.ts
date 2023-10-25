import { z } from 'zod';

const collectiblesSchema = z.object({
    name: z.string(),
    description: z.string(),
    collectionId: z.string(),
    status: z.enum(['ACQUIRED', 'PLANNED']),
    dragPosition: z.number(),
});

const updateCollectionSchema = collectiblesSchema.partial();

const deleteCollectibleSchema = z.object({
    collectibleId: z.string(),
});

export { collectiblesSchema, updateCollectionSchema, deleteCollectibleSchema };

