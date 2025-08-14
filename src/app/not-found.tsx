import type { Metadata } from 'next';

import { Layout } from '@common';
import { NotFound } from '@page';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Page Not Found | Vimal Menon',
};

const Page: React.FC = () => (
  <Layout>
    <NotFound />
  </Layout>
);
export default Page;
