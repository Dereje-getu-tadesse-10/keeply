import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { z } from 'zod';

import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import { collectionWithId } from '$/schemas/collections-schema';

const paramsUrl = z.object({
  collectionId: z.string(),
});

const bodySchema = z.object({
  userId: z.string(),
});

export async function DELETE(
  req: Request,
  { params }: { params: { collectionId: string } }
) {
  const session = await getServerSession(config);
  const response = paramsUrl.safeParse(params);
  const body = await req.json();
  const bodyResponse = bodySchema.safeParse(body);

  if (!response.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  if (!bodyResponse.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // On vérifie que la session est valide
  const sessionError = verifySession(session, {
    userId: bodyResponse.data.userId,
  });
  if (sessionError) {
    return NextResponse.json(sessionError, { status: sessionError.status });
  }

  // On récupère les données de la collection
  const { collectionId } = response.data;

  // On vérifie que la collection existe
  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
  });

  // Si la collection n'existe pas, on renvoie une erreur
  if (!collection) {
    return NextResponse.json(
      { message: "Cette collection n'existe pas" },
      { status: 404 }
    );
  }

  // Si l'utilisateur n'est pas le propriétaire de la collection, on renvoie une erreur
  if (collection.userId !== bodyResponse.data.userId) {
    return NextResponse.json(
      { message: "Vous n'avez pas les droits pour supprimer cette collection" },
      { status: 401 }
    );
  }

  // On supprime la collection
  await prisma.collection.delete({ where: { id: collectionId } });

  // On renvoie une réponse
  return NextResponse.json(
    { message: `La collection a bien été supprimée ! jhbjh` },
    { status: 200 }
  );
}
