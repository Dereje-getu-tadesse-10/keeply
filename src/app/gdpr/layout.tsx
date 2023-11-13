import { Navbar } from '$/components/commons';

export const GdprLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default GdprLayout;
