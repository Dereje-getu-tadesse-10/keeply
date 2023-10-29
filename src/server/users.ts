import { prisma } from '$/lib/prisma';

const getUser = async (currentUser: string) => {
    return await prisma.user.findUnique({
        where: {
            username: currentUser,
        },
        select: {
            id: true,
            collections: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    items: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                        },
                        orderBy: {
                            id: 'asc',
                        },
                    },
                },
            },
        },
    });
};

export { getUser };