import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { SelectTheme } from './SelectTheme';

export const metadata: Metadata = {
  title: 'Config | Vimal Menon',
  description: "This is Vimal Menon's personal website",
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
