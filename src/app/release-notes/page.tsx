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
        <div>0.0.7</div>
        <ul>
          <li>Improved Footer UI</li>
          {/* <li></li> */}
        </ul>
      </div>
      <div>
        <div>0.0.5</div>
        <ul>
          <li>Better linting</li>
          <li>Responsive Header and Footer</li>
        </ul>
      </div>
      <div>
        <div>0.0.3</div>
        <ul>
          <li>Added Test</li>
          <li>Added Content About me page</li>
        </ul>
      </div>
      <div>
        <div>0.0.2</div>
        <ul>
          <li>Set up CI Check</li>
          <li>Set up Breadcrumbs</li>
          <li>Show Selected Navigation</li>
        </ul>
      </div>
      <div>
        <div>0.0.1</div>
        <ul>
          <li>Create Basic Layout</li>
          <li>Create Release Notes</li>
          <li>Show Version Number</li>
        </ul>
      </div>
      <div>
        <div>0.0.0</div>
        <ul>
          <li>Use NextJs</li>
          <li>GitHub Action to build page</li>
          <li>Add Eslint</li>
        </ul>
      </div>
    </Box>
  );
};

export default Page;
