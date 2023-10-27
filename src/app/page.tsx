import { ButtonLink } from "$/components/ui/button-link/button-link";


const Home = () => {
  return (
    <main>
        <ButtonLink intent={"secondary"} href="/about">
          About
        </ButtonLink>
    </main>
  );
};

export default Home;
