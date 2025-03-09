import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Admin | Vimal Menon',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box>
      This is Admin Page
      {children}
    </Box>
  );
};

export default RootLayout;
