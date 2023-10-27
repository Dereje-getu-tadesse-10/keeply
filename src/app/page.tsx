import { Button } from '$/components/ui';
import { ButtonLink } from '$/components/ui/button-link/button-link';

const Home = () => {
  return (
    <main>
      <ButtonLink intent={'primary'} size={'medium'} href='/about'>
        Bonjour le monde
      </ButtonLink>
    </main>
  );
};

export default Home;
