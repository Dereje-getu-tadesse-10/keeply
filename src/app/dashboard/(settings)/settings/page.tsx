import { Heading, Paragraph } from '$/components/ui';
import { auth } from '$/lib/auth';
import { getUser, getBackgroundColor } from '$/server/users';
import { Metadata } from 'next';
import { Form as UpdateUserForm } from './components/form/form';
import { Description } from './components/description/description';

export const metadata: Metadata = {
  title: 'Paramètres - Keeply',
};

const SettingsPage = async () => {
  const user = await auth();

  const userInfos = await getUser(user?.user.id);
  const backgroundColors = await getBackgroundColor();

  if (!userInfos) {
    return <div className='spinner'></div>;
  }

  return (
    <>
      <Heading>Paramètres</Heading>
      <Paragraph>Mettez à jour vos informations personnelles.</Paragraph>
      <Description userInfos={userInfos} />
      <UpdateUserForm
        userId={user?.user.id}
        userInfos={userInfos}
        backgroundColors={backgroundColors}
      />
    </>
  );
};

export default SettingsPage;
