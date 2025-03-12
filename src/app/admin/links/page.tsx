import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { AdminLinks } from '@page';
import { StyledMain } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Links | Admin | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <StyledMain>
      <Breadcrumbs navigation={Navigation.AdminLinks} />
      <AdminLinks />
    </StyledMain>
  );
};

export default Page;
