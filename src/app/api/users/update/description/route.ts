import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';

import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import { descriptionSchema, usernameSchema } from '$/schemas/users-schema';

export async function PUT(req: Request, res: Response) {
  const session = await getServerSession(config);
  const body = await req.json();
  const response = descriptionSchema.safeParse(body);

  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    console.log(response.error);
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // On vérifie que la session est valide
  const sessionError = verifySession(session, {
    userId: response.data.userId,
  });
  if (sessionError) {
    console.log(sessionError);
    return NextResponse.json(sessionError, { status: sessionError.status });
  }

  // On récupère les données de la collection
  const { description, userId: descriptionUserId } = response.data;

  const userId = descriptionUserId as string;

  // On crée la collection
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      description,
    },
  });

  // On renvoie une réponse
  return NextResponse.json(
    { message: `La description a bien été modifiée !` },
    { status: 201 }
  );
}
