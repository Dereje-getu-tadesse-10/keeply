import * as z from 'zod';

const descriptionSchema = z.object({
    description: z.string().max(500, 'La description est trop longue'),
    userId: z.string(),
});

const usernameSchema = z.object({
    username: z.string()
        .min(3, 'Le nom d\'utilisateur est trop court')
        .max(50, 'Le nom d\'utilisateur est trop long')
        .refine((value) => /^[a-zA-Z0-9-_]+$/.test(value), {
            message: 'Le nom d\'utilisateur ne doit contenir que des lettres, des chiffres, des tirets et des underscores',
        }),
});

const createUsernameSchema = usernameSchema.extend({
    userId: z.string(),
});

export {
    descriptionSchema,
    usernameSchema,
    createUsernameSchema,
}
