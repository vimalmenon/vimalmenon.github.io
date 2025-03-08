import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Release Notes | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.ReleaseNote} />
      <div>
        <div>0.0.10</div>
        <ul>
          <li>Create tag & release</li>
          <li>Improve UI</li>
        </ul>
      </div>
      <div>
        <div>[0.0.9 - 0.0.0]</div>
        <ul>
          <li>[Pages] Release Notes | About</li>
          <li>Partial Google Analytics</li>
          <li>Set up CI & CD</li>
          <li>Release Notes</li>
          <li>Static Website</li>
          <li>GitHub Action</li>
          <li>Added Eslint</li>
          <li>Added Test</li>
          <li>Responsive UI</li>
          <li>Basic Layout</li>
          <li>NextJs</li>
        </ul>
      </div>
    </Box>
  );
};

export default Page;
