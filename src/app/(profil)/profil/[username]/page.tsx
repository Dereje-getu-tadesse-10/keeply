import { Card } from '$/components/ui';
import { getUserAndCollections } from '$/server/users';
import { Button } from '@jsx-email/all';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { username: string } }) => {
  const currentUser = params.username;

  const userProfil = await getUserAndCollections(currentUser);
  if (!userProfil) notFound();

  console.log(userProfil);
  return <main className='profil'
    style={{
      backgroundImage: `${userProfil.backgroundColor?.colorCode}`
    }}
  >
    
  </main>;
};

export default Page;
