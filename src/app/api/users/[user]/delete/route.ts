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
  const parse = deleteUserSchema.safeParse(userId);
  if (!parse.success) {
    return NextResponse.json({
      status: 401,
    });
  }
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return NextResponse.json({ status: 201 });
}
