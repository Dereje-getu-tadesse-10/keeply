import { prisma } from '$/lib/prisma';

// Fonction pour récupérer les collections de l'utilisateur
const getCollections = async (id: string) => {
  return await prisma.collection.findMany({
    where: {
      userId: id,
    },
    select: {
      userId: true,
      id: true,
      name: true,
      status: true,
      items: true,
    },
  });
};

// Fonction pour compter le nombre de collections de l'utilisateur
const countCollections = async (id: string) => {
  return await prisma.collection.count({
    where: {
      userId: id,
    },
  });
};

// Fonction pour récupérer une collection
const getGetCollection = async (id: string, userId: string) => {
  return await prisma.collection.findUnique({
    where: {
      id: id,
    },
    select: {
      userId: true,
      id: true,
      name: true,
      status: true,
      description: true,
      created_at: true,
      updated_at: true,
    },
  });
};

const getCollectibles = async (id: string) => {
  return await prisma.collectible.findMany({
    where: {
      collectionId: id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      collectionId: true,
      created_at: true,
      updated_at: true,
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
            }
          }
        },
      },
    },
  });
}


export { getCollections, countCollections, getGetCollection, getCollectibles, getUser };
