import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import z from 'zod';


const bodySchema = z.object({
  userId: z.string(),
  updates: z.array(
    z.object({
      id: z.string(),
      dragPosition: z.number(),
    })
  ),
});

export async function PUT(req: Request) {
  const session = await getServerSession(config);
  const body = await req.json();
  const response = bodySchema.safeParse(body);

  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // On vérifie que la session est valide
  const sessionError = verifySession(session, {
    userId: response.data.userId as string,
  });
  if (sessionError) {
    console.log(sessionError);
    return NextResponse.json(sessionError, { status: sessionError.status });
  }

  // On récupère les données de la collection
  const collectibles = await prisma.collectible.findMany({
    where: {
      id: {
        in: response.data.updates.map((update) => update.id),
      },
    },
  });

  // On vérifie que la collection existe
  if (!collectibles) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite" },
      { status: 400 }
    );
  }

  // On met à jour la collection
  const updatedCollectibles = await Promise.all(
    collectibles.map(async (collectible) => {
      const update = response.data.updates.find(
        (update) => update.id === collectible.id
      );
      return await prisma.collectible.update({
        where: {
          id: collectible.id,
        },
        data: {
          dragPosition: update?.dragPosition,
        },
      });
    })
  );

  console.log('Collectible mis à jour');
  // On renvoie une réponse
  return NextResponse.json({ status: 201 });
}
