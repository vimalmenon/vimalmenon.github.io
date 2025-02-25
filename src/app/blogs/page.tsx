import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <div>
      <main>
        <div>This is Blogs page</div>
      </main>
    </div>
  );
};

export default Page;
