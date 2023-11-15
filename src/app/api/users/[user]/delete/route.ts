import { prisma } from '$/lib/prisma';
import { NextResponse } from 'next/server';
import z from 'zod';

const deleteUserSchema = z.object({
  user: z.string(),
});

export async function DELETE(
  request: Request,
  { params }: { params: { user: string } }
) {
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
  return NextResponse.json(
    { message: `Votre profil a bien été mis à jour` },
    { status: 201 }
  );
}
