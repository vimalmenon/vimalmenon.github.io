import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <div>
      <main>
        <div>This is About page</div>
      </main>
    </div>
  );
};

export default Page;
