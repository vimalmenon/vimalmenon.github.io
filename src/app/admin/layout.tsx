import Box from '@mui/material/Box';
import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ComingSoon } from '@component';
import { AdminNavigation, env } from '@data';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Admin | Vimal Menon',
};

const AdminLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box>
      {env.ENV === 'local' ? (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginY: 2 }}>
            {AdminNavigation.map((data) => {
              return (
                <MuiLink
                  component={Link}
                  href={data.link}
                  underline="always"
                  sx={{ color: teal[500], fontWeight: 'bold' }}
                  key={data.name}
                >
                  {data.name}
                </MuiLink>
              );
            })}
          </Box>
          {children}
        </Box>
      ) : (
        <ComingSoon page="Admin Page" />
      )}
    </Box>
  );
};

export default AdminLayout;
