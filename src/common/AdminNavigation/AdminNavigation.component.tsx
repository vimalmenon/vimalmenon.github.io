'use client';

import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AdminNavigation as Navigation } from '@data';
import { StyledAdminNavigation } from '@style';

export const AdminNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <StyledAdminNavigation>
      <MenuList sx={{ display: 'flex', flexDirection: 'column' }}>
        {Navigation.map((data) => {
          if (data.show) {
            return (
              <MenuItem key={data.name}>
                <MuiLink
                  component={Link}
                  href={data.link}
                  underline={pathname === data.link ? 'always' : 'none'}
                  sx={{ color: teal[500], fontWeight: 'bold' }}
                >
                  {data.name}
                </MuiLink>
              </MenuItem>
            );
          }
          return null;
        })}
      </MenuList>
    </StyledAdminNavigation>
  );
};
