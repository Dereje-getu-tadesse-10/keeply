import { z } from 'zod';

const collectiblesSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom de l'objet à collectionner est requis")
    .max(50, "Le nom de l'objet à collectionner est trop long"),
  description: z
    .string()
    .min(1,'La description est requise')
    .max(500, 'La description est trop longue'),
  collectionId: z.string().min(1, 'La collection est requise'),
  status: z.enum(['ACQUIRED', 'PLANNED']),
  dragPosition: z
    .number()
    .refine((pos) => !isNaN(pos), { message: 'Position invalide' })
    .refine((pos) => pos > 0, { message: 'Position invalide' }),
  userId: z.string(),

});

const updateCollectibleSchema = collectiblesSchema.partial();

const createCollectiblesSchema = collectiblesSchema.omit({ userId: true, collectionId:true, dragPosition:true });

export { collectiblesSchema, updateCollectibleSchema, createCollectiblesSchema };
