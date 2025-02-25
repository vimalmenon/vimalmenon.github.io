import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@common';

export const metadata: Metadata = {
  title: 'Release Notes | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <Box component={'main'}>
      <Breadcrumbs />
      <div>Release Notes</div>
      <div>
        <div>0.0.2</div>
        <ul></ul>
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
