import { UpdateUser } from '$/components/forms';
import { Heading, Paragraph } from '$/components/ui';
import { auth } from '$/lib/auth';
import { getUser } from '$/server/users';

const SettingsPage = async () => {
  const user = await auth();

  const userInfos = await getUser(user?.user.id);

  if (!userInfos) {
    return <div>loading...</div>;
  }

  return (
    <main>
      <Heading>Paramètres</Heading>
      <Paragraph>Mettez à jour vos informations personnelles.</Paragraph>

      <UpdateUser userId={user?.user.id} userInfos={userInfos} />
    </main>
  );
};

export default SettingsPage;
