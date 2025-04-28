import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { ComingSoon } from '@component';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'AI | Blogs | Vimal Menon',
};

const Page: React.FC = () => (
  <StyledPage>
    <Breadcrumbs navigation={Navigation.Blogs} />
    <ComingSoon page="AI Blog Page" />
  </StyledPage>
);

export default Page;
