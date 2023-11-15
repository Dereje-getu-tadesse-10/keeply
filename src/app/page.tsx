import { Navbar } from '$/components/commons';
import { Explain } from '$/app/components/landing/explain';
import { Hero } from '$/app/components/landing/hero';
import { StratNow } from '$/app/components/landing/start-now';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Explain />
      <StratNow />
    </main>
  );
};

export default Home;
