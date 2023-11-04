import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import { updateCollectibleSchema } from '$/schemas/collectibles-schema';
import z from 'zod';

const paramsUrl = z.object({
  collectibleId: z.string(),
});

export async function DELETE(
  req: Request,
  { params }: { params: { collectibleId: string } }
) {
  const session = await getServerSession(config);
  const body = await req.json();
  const collectibleParams = paramsUrl.safeParse(params);
  const response = updateCollectibleSchema.safeParse(body);

  // Si le params n'est pas conforme au schéma, on renvoie une erreur
  if (!collectibleParams.success) {
    console.log(collectibleParams.error, 'lsfdsd');
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite héhé" },
      { status: 400 }
    );
  }

  // Si le body n'est pas conforme au schéma, on renvoie une erreur
  if (!response.success) {
    console.log(response.error, 'lsfdsd');
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

  // // On récupère les données de la collection
  const { collectibleId } = collectibleParams.data;

  // // Vérifiez que le collectible existe
  const collectible = await prisma.collectible.findUnique({
    where: { id: collectibleId },
  });

  // // Si le collectible n'existe pas, on renvoie une erreur
  if (!collectible) {
    console.log('Collectible non trouvé');
    return NextResponse.json(
      { message: 'Collectible non trouvé' },
      { status: 404 }
    );
  }

  // On crée le collectible
  await prisma.collectible.delete({
    where: { id: collectibleId },
  });

  // // On renvoie une réponse
  return NextResponse.json(
    { message: `Le collectible a bien été supprimé` },
    { status: 201 }
  );
}
