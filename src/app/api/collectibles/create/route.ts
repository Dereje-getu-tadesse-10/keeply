import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "$/lib/prisma";

import { config } from "$/lib/auth";
import { verifySession } from "$/lib/verify-session";
import { collectiblesSchema } from "$/schemas/collectibles-schema";

export async function POST(req: Request, res: Response) {
    const session = await getServerSession(config);
    const body = await req.json();
    const response = collectiblesSchema.safeParse(body);

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
    const { name, description, status, userId, collectionId, dragPosition } = response.data;

    // Vérifiez que la collection existe
    const collection = await prisma.collection.findUnique({
        where: { id: collectionId },
    });

    // Si la collection n'existe pas, on renvoie une erreur
    if (!collection) {
        console.log('Collection non trouvée');
        return NextResponse.json(
            { message: "Collection non trouvée" },
            { status: 404 }
        );
    }

    // On crée le collectible
    await prisma.collectible.create({
        data: {
            name,
            description,
            status,
            dragPosition,
            collectionId,
            image: null,
        },
    });

    // On renvoie une réponse
    return NextResponse.json(
        { message: `Le collectible ${name} a bien été créé !` },
        { status: 201 }
    );

}

