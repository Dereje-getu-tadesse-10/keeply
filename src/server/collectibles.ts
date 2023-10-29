import { prisma } from '$/lib/prisma';

const getCollectibles = async (id: string) => {
    return await prisma.collectible.findMany({
        where: {
            collectionId: id,
        },
        select: {
            id: true,
            name: true,
            description: true,
            collectionId: true,
            created_at: true,
            updated_at: true,
            dragPosition: true,
            status: true,
        },
        orderBy: {
            dragPosition: 'asc',
        },
    });
};


export { getCollectibles };