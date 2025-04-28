import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { AdminLinks } from '@page';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Links | Admin | Vimal Menon',
};

const Page: React.FC = () => (
  <StyledPage sx={{ flexDirection: 'column' }}>
    <Breadcrumbs navigation={Navigation.AdminLinks} />
    <AdminLinks />
  </StyledPage>
);

export default Page;
