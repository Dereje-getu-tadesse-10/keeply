import * as z from 'zod';

const descriptionSchema = z.object({
  description: z.string().max(500, 'La description est trop longue'),
  userId: z.string(),
});

const usernameSchema = z
  .object({
    username: z
      .string()
      .min(3, "Le nom d'utilisateur est trop court")
      .max(50, "Le nom d'utilisateur est trop long")
      .refine((value) => /^[a-z0-9-_]+$/.test(value), {
        message: `Le nom d'utilisateur ne doit contenir que des lettres(minuscules), des chiffres, des tirets et des underscores`,
      }),
    description: z.string().max(500, 'La description est trop longue'),
    currentUsername: z.string().optional(),
    backgroundColor: z.string(),
    name: z.string(),
  })
  .partial();

const createUserSchema = usernameSchema.extend({
  userId: z.string(),
});

const upddateUsernameSchema = usernameSchema
  .extend({
    userId: z.string(),
  })
  .partial();

export {
  descriptionSchema,
  usernameSchema,
  createUserSchema,
  upddateUsernameSchema,
};
