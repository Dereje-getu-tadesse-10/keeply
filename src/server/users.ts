import { prisma } from '$/lib/prisma';

const getUserAndCollections = async (currentUser: string) => {
  return await prisma.user.findUnique({
    where: {
      username: currentUser,
    },
    select: {
      id: true,
      backgroundColor: {
        select: {
          colorCode: true,
        },
      },
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

const getUser = async (currentUser: string) => {
  return await prisma.user.findUnique({
    where: {
      id: currentUser,
    },
    include: {
      backgroundColor: true,
    },
  });
};

const getBackgroundColor = async () => {
  return await prisma.backgroundColors.findMany();
};

export { getUserAndCollections, getUser, getBackgroundColor };
