import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';

import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import { createUserSchema } from '$/schemas/users-schema';

export async function PUT(req: Request, res: Response) {
  const session = await getServerSession(config);
  const body = await req.json();
  const response = createUserSchema.safeParse(body);

  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    const errorObj = JSON.parse(response.error.message)[0];
    const errorMessage = errorObj.message;
    return NextResponse.json({ message: errorMessage }, { status: 400 });
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
  const { username, userId, description } = response.data;

  const userExists = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (userExists) {
    return NextResponse.json(
      { message: `Le nom d'utilisateur est déjà utilisé` },
      { status: 400 }
    );
  }

  // On crée la collection
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username,
      description,
    },
  });

  // On renvoie une réponse
  return NextResponse.json(
    { message: `Le nom d'utilisateur a bien été modifié` },
    { status: 201 }
  );
}
