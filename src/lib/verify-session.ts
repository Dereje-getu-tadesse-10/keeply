import { Session } from 'next-auth';

export const verifySession = (
  session: Session | null,
  body: { userId: string }
) => {
  if (!session) {
    return {
      status: 401,
      message: 'Vous devez être connecté pour supprimer une collection',
    };
  }

  if (session?.user.id !== body.userId) {
    return {
      status: 401,
      message: "Vous n'avez pas les droits pour supprimer cette collection",
    };
  }

  return null;
};
