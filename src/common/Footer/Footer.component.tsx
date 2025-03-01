import Box from '@mui/material/Box';
import { blueGrey, teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { FooterNavigation } from '@data';

export const Footer: React.FC = () => {
  const version = process.env.npm_package_version;
  return (
    <Box
      component="footer"
      sx={{
        background: blueGrey[100],
        color: teal[500],
        display: 'flex',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <span style={{ fontSize: '0.8rem' }}>V{version}</span>
        <span style={{ fontSize: '0.8rem' }}>
          Copyright © 2025{' '}
          <MuiLink
            component={Link}
            href="https://vimalmenon.com/"
            underline="none"
            sx={{ color: teal[500] }}
          >
            Vimal Menon
          </MuiLink>
        </span>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box component="span" sx={{ fontSize: '1.5rem' }}>
          Resources
        </Box>
        {FooterNavigation.map((data) => {
          return (
            <span style={{ fontSize: '14px' }} key={data.name}>
              <MuiLink component={Link} href={data.link} underline="none" sx={{ color: teal[500] }}>
                {data.name}
              </MuiLink>
            </span>
          );
        })}
      </Box>
    </Box>
  );
};
