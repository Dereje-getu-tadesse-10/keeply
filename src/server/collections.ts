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
      description: true,
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
const getCollection = async (id: string, userId: string) => {

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
      _count: {
        select: {
          items: true,
        },
      },
    },
  });
};



export { getCollections, countCollections, getCollection };
