import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import { ComingSoon } from '@component';
import { env } from '@data';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Admin | Vimal Menon',
};

const AdminLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box>
      {env.ENV === 'local' ? <Fragment>{children}</Fragment> : <ComingSoon page="Admin Page" />}
    </Box>
  );
};

export default AdminLayout;
