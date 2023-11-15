import { prisma } from '$/lib/prisma';
import z from 'zod';

const deleteUserSchema = z.object({
  user: z.string(),
});

export const DELETE = async (
  request: Request,
  { params }: { params: { user: string } }
) => {
  const userId = params.user;

  const parse = deleteUserSchema.safeParse({ user: userId });

  if (!parse.success) {
    return {
      status: 400,
      body: parse.error,
    };
  }

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return Response.json({ status: 'ok' });
};