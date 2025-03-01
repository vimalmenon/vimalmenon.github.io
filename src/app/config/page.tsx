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

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Config} />
      <Box>Select a Theme</Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {colors.map((color) => {
          return (
            <Box sx={{ width: '100px', height: '50px', background: color[500] }} key={color[100]} />
          );
        })}
      </Box>
    </Box>
  );
};

export default Page;
