import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from '@mui/material/colors';

export const metadata: Metadata = {
  title: 'Config | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const colors = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A400', 'A700'];

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Config} />
      <Box>Select a Theme</Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {colors.map((color: Record<string | number, string>) => {
          return (
            <Box key={color[500]}>
              {shades.map((shade: string | number, index) => {
                return (
                  <Box
                    sx={{ width: '100px', height: '50px', background: color[shade] }}
                    key={`${color[shade]}-${index}`}
                  />
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Page;
