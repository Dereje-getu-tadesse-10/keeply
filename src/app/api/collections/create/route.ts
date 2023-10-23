import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { z } from 'zod';

import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';

const bodySchema = z.object({
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

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(config);
  const body = await req.json();
  const response = bodySchema.safeParse(body);

  // On vérifie que la session est valide
  const sessionError = verifySession(session, body.userId);
  // Si la session n'existe pas, on renvoie une erreur
  if (sessionError)
    return NextResponse.json(sessionError, { status: sessionError.status });
  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }
  // On récupère les données de la collection
  const { name, description, status, userId } = response.data;
  // On vérifie que l'utilisateur existe
  await prisma.collection.create({
    data: {
      name,
      description,
      status,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  // On renvoie une réponse
  return NextResponse.json(
    { message: `La collection ${name} a bien été créée !` },
    { status: 201 }
  );
}
