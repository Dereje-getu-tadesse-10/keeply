import { Button } from '$/components/ui';
import { ButtonLink } from '$/components/ui/button-link/button-link';

const Home = () => {
  return (
    <main>
      <Button intent={'danger'} size={'medium'}>
        Bonjour le monde
      </Button>
    </main>
  );
};

export default Home;
