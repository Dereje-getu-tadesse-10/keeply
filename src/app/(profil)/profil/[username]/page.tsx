import { getUser } from '$/lib/queries';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { username: string } }) => {
  const currentUser = params.username;

  const userProfil = await getUser(currentUser);
  if (!userProfil) notFound();
  console.log(userProfil)
  return <main>hello</main>;
};

export default Page;
