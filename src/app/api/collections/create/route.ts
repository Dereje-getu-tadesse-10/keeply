import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';

import { config } from '$/lib/auth';
import { verifySession } from '$/lib/verify-session';
import { collectionsSchema } from '$/schemas/collections-schema';

export async function POST(req: Request, res: Response) {
    const session = await getServerSession(config);
    const body = await req.json();
    const response = collectionsSchema.safeParse(body);

    // Si le body n'est pas conforme au schéma, on renvoie une erreur
    if (!response.success) {
        console.log(response.error);
        return NextResponse.json(
            { message: "Oups, une erreur s'est produite" },
            { status: 400 }
        );
    }

    // On vérifie que la session est valide
    const sessionError = verifySession(session, { userId: response.data.userId });
    if (sessionError) {
        console.log(sessionError);
        return NextResponse.json(sessionError, { status: sessionError.status });
    }

    // On récupère les données de la collection
    const { name, description, status, userId: collectionUserId } = response.data;

    const userId = collectionUserId as string;

    // On crée la collection
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