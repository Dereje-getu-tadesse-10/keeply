import { prisma } from '$/lib/prisma';

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

const countCollections = async (id: string) => {
  return await prisma.collection.count({
    where: {
      userId: id,
    },
  });
};

const countItems = async (id: string) => {
  return await prisma.item.count({
    where: {
      collection: {
        userId: id,
      },
    },
  });
};

export { getCollections, countCollections, countItems };
