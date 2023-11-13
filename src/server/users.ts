import { prisma } from '$/lib/prisma';

const getUserAndCollections = async (currentUser: string) => {
  return await prisma.user.findUnique({
    where: {
      username: currentUser,
    },
    select: {
      id: true,
      username: true,
      name: true,
      description: true,
      backgroundColor: {
        select: {
          colorCode: true,
        },
      },
      collections: {
        where: {
          status: 'PUBLIC',
        },
        select: {
          status: true,
          id: true,
          name: true,
          description: true,
          created_at: true,
          updated_at: true,
          items: {
            select: {
              id: true,
              name: true,
              description: true,
              status: true,
            },
            orderBy: {
              dragPosition: 'asc',
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
    select: {
      id: true,
      username: true,
      description: true,
      name: true,
      backgroundColor: {
        select: {
          colorCode: true,
          id: true,
          name: true,
        },
      },
    },
  });
};

const getBackgroundColor = async () => {
  return await prisma.backgroundColors.findMany();
};

export { getUserAndCollections, getUser, getBackgroundColor };
