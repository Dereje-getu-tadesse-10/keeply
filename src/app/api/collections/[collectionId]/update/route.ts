import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { z } from 'zod';

import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import { updateCollectionSchema } from '$/schemas/collections-schema';


const paramsUrl = z.object({
  collectionId: z.string(),
});

export async function PUT(
  req: Request,
  { params }: { params: { collectionId: string } }
) {
  const session = await getServerSession(config);
  const body = await req.json();
  const collectionId = paramsUrl.safeParse(params);
  const response = updateCollectionSchema.safeParse(body);

  if (!collectionId.success) {
    console.log(collectionId.error);
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // On vérifie que la session est valide
  const sessionError = verifySession(session, body);
  if (sessionError)
    return NextResponse.json(sessionError, { status: sessionError.status });

  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // On vérifie que la collection existe
  const collection = await prisma.collection.findUnique({
    where: { id: collectionId.data.collectionId },
  });

  // Si la collection n'existe pas, on renvoie une erreur
  if (!collection) {
    return NextResponse.json(
      { message: "Cette collection n'existe pas" },
      { status: 404 }
    );
  }

  // Si l'utilisateur n'est pas le propriétaire de la collection, on renvoie une erreur
  if (collection.userId !== response.data.userId) {
    return NextResponse.json(
      {
        message: "Vous n'avez pas les droits pour supprimer cette collection",
      },
      { status: 401 }
    );
  }

  // On met à jour la collection
  await prisma.collection.update({
    where: { id: collectionId.data.collectionId },
    data: {
      name: body.name,
      description: body.description,
      status: body.status,
    },
  });

  // On renvoie une réponse
  return NextResponse.json(
    { message: `La collection ${collection.name} a bien été modifiée !` },
    { status: 200 }
  );
}
