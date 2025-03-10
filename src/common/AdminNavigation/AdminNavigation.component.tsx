import Box from '@mui/material/Box';
import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { AdminNavigation as Navigation } from '@data';

export const AdminNavigation: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginY: 2, width: '100px' }}>
      {Navigation.map((data) => {
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
  );
};
