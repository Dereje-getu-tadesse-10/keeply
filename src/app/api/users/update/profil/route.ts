import { NextResponse } from 'next/server';
import { auth } from '$/lib/auth';
import { prisma } from '$/lib/prisma';
import { verifySession } from '$/lib/verify-session';
import { createUserSchema } from '$/schemas/users-schema';

export async function PUT(req: Request, res: Response) {
  const session = await auth();
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
  const {
    username,
    userId,
    description,
    currentUsername,
    backgroundColor,
    name,
  } = response.data;

  // On vérifie si l'utilisateur utilise déjà ce nom d'utilisateur ou non si c'est le cas on met a jour le profil sans changer le nom d'utilisateur
  if (currentUsername === username) {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        description,
        backgroundColorId: backgroundColor,
        name: name,
      },
    });
    return NextResponse.json(
      { message: `Votre profil a bien été mis à jour` },
      { status: 201 }
    );
  }

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

  // On met à jour le profil
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username,
      description,
      backgroundColorId: backgroundColor,
      name: name,
    },
  });

  // On renvoie une réponse
  return NextResponse.json(
    { message: `Votre profil a bien été mis à jour` },
    { status: 201 }
  );
}
