import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { ComingSoon, MainLayout } from '@component';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: Navigation.Blogs.title,
};

const Page: React.FC = () => (
  <MainLayout>
    <StyledPage>
      <Breadcrumbs navigation={Navigation.Blogs} />
      <ComingSoon page="Blogs Page" />
    </StyledPage>
  </MainLayout>
);

export default Page;
