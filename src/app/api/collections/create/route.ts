import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '$/lib/prisma';
import { z } from 'zod';

import { config } from '$/lib/auth';

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
    // La session actuelle de l'utilisateur
    const session = await getServerSession(config);

    const body = await req.json();

    // On vérifie que le body est conforme au schéma
    const response = bodySchema.safeParse(body);

    // Si la session n'existe pas, on renvoie une erreur
    if (!session) {
        return NextResponse.json(
            {
                message: 'Vous devez être connecté pour créer une collection',
            },
            { status: 401 }
        );
    }

    // Si l'utilisateur n'est pas le propriétaire de la collection, on renvoie une erreur
    if (session?.user.id !== body.userId) {
        return NextResponse.json(
            {
                message: "Vous n'avez pas les droits pour créer cette collection",
            },
            { status: 401 }
        );
    }

    if (!response.success) {
        return NextResponse.json(
            {
                message: "Oups, une erreur s'est produite",
            },
            { status: 400 }
        );
    }

    // On récupère les données de la collection
    const { name, description, status, userId } = response.data;

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

    // On renvoie une réponse de succès
    return NextResponse.json(
        {
            message: `La collection ${name} a bien été créée !`,
        },
        { status: 201 }
    );
}
