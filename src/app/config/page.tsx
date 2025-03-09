import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { env, Navigation } from '@data';
import { SelectTheme } from './SelectTheme';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Config | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Config} />
      <Box>Env Value</Box>
      <Box sx={{ marginY: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>ENV</Box>
          <Box>{env.ENV}</Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>API</Box>
          <Box>{env.API}</Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>TEST</Box>
          <Box>{env.TEST}</Box>
        </Box>
      </Box>
      <Box>Select a Theme</Box>
      <SelectTheme />
    </Box>
  );
};

export default Page;
