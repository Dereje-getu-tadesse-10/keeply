import { NextResponse } from 'next/server';
import { prisma } from '$/lib/prisma';

import { usernameSchema } from '$/schemas/users-schema';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const response = usernameSchema.safeParse(body);

  if (!response.success) {
    const errorObj = JSON.parse(response.error.message)[0];
    const errorMessage = errorObj.message;
    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }

  const { username } = response.data;

  const usernameExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (usernameExists) {
    return NextResponse.json({ status: 200, data: { exists: true } });
  }

  return NextResponse.json({ status: 200, data: { exists: false } });
}
