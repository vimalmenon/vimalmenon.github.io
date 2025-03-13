import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { AdminNavigation as Navigation } from '@common';
import { ComingSoon } from '@component';
import { env } from '@data';
import { StyledPage } from '@style';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Admin | Vimal Menon',
};

const AdminLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box>
      {env.IS_LOCAL ? (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Navigation />
          {children}
        </Box>
      ) : (
        <StyledPage>
          <ComingSoon page="Admin Page" />
        </StyledPage>
      )}
    </Box>
  );
};

export default AdminLayout;
