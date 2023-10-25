import { getUser } from '$/lib/queries';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { username: string } }) => {

    const currentUser = params.username;


    const userProfil = await getUser(currentUser);
     if (!userProfil) notFound();

    return (
        <main>
       
        </main>
    );
};

export default Page;
