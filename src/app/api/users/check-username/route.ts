import { NextResponse } from 'next/server';
import { prisma } from '$/lib/prisma';

import { usernameSchema } from '$/schemas/users-schema';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const response = usernameSchema.safeParse(body);

  if (!response.success) {
    const errorObj = JSON.parse(response.error.message)[0];
    const errorMessage = errorObj.message;
    return NextResponse.json(
      {
        data: {
          exists: false,
          message: errorMessage,
        },
      },
      { status: 200 }
    );
  }

  const { username, currentUsername } = response.data;

  if (username === currentUsername) {
    return NextResponse.json({ status: 200 });
  } else {
    const usernameExists = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (usernameExists) {
      return NextResponse.json(
        {
          data: {
            exists: true,
            message: "Ce nom d'utilisateur est déjà utilisé",
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        data: {
          exists: false,
          message: "Ce nom d'utilisateur est disponible",
        },
      },
      { status: 200 }
    );
  }
}
