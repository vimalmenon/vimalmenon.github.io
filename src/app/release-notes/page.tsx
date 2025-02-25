import type { Metadata } from 'next';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'Release Notes | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <Box component={'main'}>
      <div>This is Blogs page</div>
      <div>
        <div>0.0.1</div>
        <ul>
            <li>Create Basic Layout</li>
        </ul>
      </div>
      <div>
        <div>0.0.0</div>
        <ul>
            <li>Use NextJs</li>
            <li>GitHub Action Build to update page</li>
            <li>Add Eslint</li>
        </ul>
      </div>
    </Box>
  );
};

export default Page;
