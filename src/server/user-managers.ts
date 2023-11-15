import { prisma } from '$/lib/prisma';
import { BackgroundColors } from '@prisma/client';
export type User = {
  id: string;
  username: string | null;
  name: string | null;
  description: string | null;
  backgroundColor?: BackgroundColors | null;
  collections?: Collection[];
};

type Collection = {
  id: string;
  name: string;
  status: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  items?: Item[];
};

type Item = {
  id: string;
  name: string;
  description: string;
  status: string;
};

type BackgroundColor = {
  colorCode: string;
  id?: string;
  name?: string;
};

class UserManager {
  async getUserAndCollections(currentUser: string): Promise<User | null> {
    return prisma.user.findUnique({
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
            id: true,
            name: true,
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
  }

  async getUser(currentUser: string): Promise<User | null> {
    return prisma.user.findUnique({
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
  }

  async getBackgroundColors(): Promise<BackgroundColor[]> {
    return prisma.backgroundColors.findMany();
  }
}

export { UserManager };
