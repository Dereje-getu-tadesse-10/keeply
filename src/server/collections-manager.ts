import { prisma } from '$/lib/prisma';
import { Collectible, CollectionStatus } from '@prisma/client';

export type Collection = {
  userId: string;
  id: string;
  name: string;
  status: CollectionStatus;
  description: string;
  items?: Collectible[];
  created_at?: Date | null;
  updated_at?: Date | null;
  _count?: {
    items: number;
  };
};

class CollectionsManager {
  async getCollections(userId: string): Promise<Collection[]> {
    return prisma.collection.findMany({
      where: {
        userId: userId,
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
  }

  async countCollections(userId: string): Promise<number> {
    return prisma.collection.count({
      where: {
        userId: userId,
      },
    });
  }

  async getCollection(
    collectionId: string,
    userId: string
  ): Promise<Collection | null> {
    return prisma.collection.findUnique({
      where: {
        id: collectionId,
        userId: userId,
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
  }
}

export { CollectionsManager };
