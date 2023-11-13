import { Navbar } from '$/components/commons';
import { Explain } from '$/components/landing/ explain';
import { Hero } from '$/components/landing/hero';
import { StratNow } from '$/components/landing/start-now';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Explain />
        <StratNow />
      </main>
    </>
  );
};

export default Home;
