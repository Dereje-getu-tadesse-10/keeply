import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import z from 'zod';
import { updateCollectionSchema } from '$/schemas/collections-schema';

const paramsUrl = z.object({
  collectibleId: z.string().min(1, 'Le collectibleId doit être renseigné'),
  userId: z.string().min(1, 'Le userId doit être renseigné'),
});

export async function GET(
  req: Request,
  { params }: { params: { collectibleId: string; userId: string } }
) {
  const session = await getServerSession(config);
  const collectibleParams = paramsUrl.safeParse(params);

  // Si le params n'est pas conforme au schéma, on renvoie une erreur
  if (!collectibleParams.success) {
    return NextResponse.json(
      { message: "Oups, une erreur s'est produite héhé" },
      { status: 400 }
    );
  }

  // On vérifie que la session est valide
  const sessionError = verifySession(session, {
    userId: collectibleParams.data.userId as string,
  });

  if (sessionError) {
    console.log(sessionError);
    return NextResponse.json(sessionError, { status: sessionError.status });
  }

  const { collectibleId } = collectibleParams.data;

  // Vérifiez que le collectible existe
  const collectible = await prisma.collectible.findUnique({
    where: { id: collectibleId },
  });

  // Si le collectible n'existe pas, on renvoie une erreur
  if (!collectible) {
    console.log('Collectible non trouvé');
    return NextResponse.json(
      { message: 'Collectible non trouvé' },
      { status: 404 }
    );
  }

  // On renvoie une réponse
  return NextResponse.json({ data: collectible }, { status: 201 });
}
