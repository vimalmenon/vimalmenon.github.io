import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { AdminNavigation as Navigation } from '@data';
import { StyledAdminNavigation } from '@style';

export const AdminNavigation: React.FC = () => {
  return (
    <StyledAdminNavigation>
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
    </StyledAdminNavigation>
  );
};
