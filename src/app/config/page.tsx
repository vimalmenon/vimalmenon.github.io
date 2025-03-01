import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@common';
import { Navigation, colors } from '@data';

import { ColorItem } from './ColorItem';
import { ColorMenu } from './ColorMenu';

export const metadata: Metadata = {
  title: 'Config | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const shades: (string | number)[] = [
  // 'light',
  // 'main',
  // 'dark',
  // 'contrastText',
  'A100',
  'A200',
  'A400',
  'A700',
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
];

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Config} />
      <Box>Select a Theme</Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {colors.map((color: Record<string | number, string>) => {
          return (
            <Box key={color[50]}>
              {shades.map((shade: string | number, index) => {
                return <ColorItem color={color[shade]} key={`${color[shade]}-${index}`} />;
              })}
            </Box>
          );
        })}
        <ColorMenu />
      </Box>
    </Box>
  );
};

export default Page;
