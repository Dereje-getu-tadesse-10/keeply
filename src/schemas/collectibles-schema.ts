import { z } from 'zod';

const collectiblesSchema = z.object({
    name: z.string()
        .min(1, 'Le nom est trop court')
        .max(50, 'Le nom est trop long'),
    description: z.string()
        .min(1, 'La description est obligatoire')
        .max(500, 'La description est trop longue'),
    collectionId: z.string(),
    status: z.enum(['ACQUIRED', 'PLANNED']),
    dragPosition: z.number(),
});

const updateCollectionSchema = collectiblesSchema.partial();

const deleteCollectibleSchema = z.object({
    collectibleId: z.string(),
});

export { collectiblesSchema, updateCollectionSchema, deleteCollectibleSchema };

