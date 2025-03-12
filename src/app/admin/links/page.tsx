import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { Admin } from '@page';
import { StyledMain } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Links | Admin | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <StyledMain>
      <Breadcrumbs navigation={Navigation.Admin} />
      <Admin />
    </StyledMain>
  );
};

export default Page;
