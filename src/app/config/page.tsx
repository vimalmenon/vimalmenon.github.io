import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { SelectTheme } from './SelectTheme';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Config | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Config} />
      <Box>Select a Theme</Box>
      <SelectTheme />
    </Box>
  );
};

export default Page;
