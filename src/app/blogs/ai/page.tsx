import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { ComingSoon, MainLayout } from '@component';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'AI | Blogs | Vimal Menon',
};

const Page: React.FC = () => (
  <MainLayout>
    <StyledPage>
      <Breadcrumbs navigation={Navigation.Blogs} />
      <ComingSoon page="AI Blog Page" />
    </StyledPage>
  </MainLayout>
);

export default Page;
