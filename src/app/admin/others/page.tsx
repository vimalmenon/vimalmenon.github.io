import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { Others } from '@page';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Others | Admin | Vimal Menon',
};

const Page: React.FC = () => (
  <StyledPage sx={{ flexDirection: 'column' }}>
    <Breadcrumbs navigation={Navigation.AdminOthers} />
    <Others />
  </StyledPage>
);

export default Page;
