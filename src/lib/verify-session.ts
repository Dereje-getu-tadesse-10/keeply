import { Session } from 'next-auth';

export const verifySession = (
  session: Session | null,
  body: { userId: string }
) => {
  if (!session) {
    return {
      status: 401,
      message: 'Vous devez être connecté',
    };
  }

  if (session?.user.id !== body.userId) {
    return {
      status: 401,
      message: "Vous n'avez pas les droits",
    };
  }

  return null;
};
