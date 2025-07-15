import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import type { Metadata } from 'next';
import { AdminNavigation as Navigation } from '@common';
import { ComingSoon } from '@component';
import { AdminContext } from '@context';
import { env } from '@data';
import { StyledPage } from '@style';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Admin | Vimal Menon',
};

const AdminLayout: React.FC<IReactChildren> = ({ children }) => {
  if (env.IS_LOCAL) {
    return (
      <AdminContext>
        <Box sx={{ display: 'flex', flex: '1 1 100%' }}>
          <Navigation />
          <Divider orientation="vertical" flexItem />
          {children}
        </Box>
      </AdminContext>
    );
  }
  return (
    <StyledPage>
      <ComingSoon page="Admin Page" />
    </StyledPage>
  );
};

export default AdminLayout;
