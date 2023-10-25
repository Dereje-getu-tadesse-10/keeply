import { z } from 'zod';

export const collectiblesSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().url(),
    external_url: z.string().url(),
    attributes: z.array(
        z.object({
            trait_type: z.string(),
            value: z.string(),
        })
    ),
});