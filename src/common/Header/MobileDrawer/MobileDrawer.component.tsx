'use client';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import MenuList from '@mui/material/MenuList';
import { Fragment } from 'react';
import { useAppContext } from '@context';
import { AdminNavigation, env, HeaderNavigation, SocialMedias } from '@data';
import { StyledMobileDrawer } from '@style';
import { Link } from './Link';

export const MobileDrawer: React.FC = () => {
  const { showDrawer, toggleDrawer } = useAppContext();
  return (
    <Fragment>
      <StyledMobileDrawer anchor={'top'} open={showDrawer} onClose={toggleDrawer}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 2 }}>
          <MenuList sx={{ display: 'flex', flexDirection: 'column' }}>
            {HeaderNavigation.map((nav) => {
              if (nav.show) {
                return <Link navigation={nav} key={nav.name} />;
              }
              return null;
            })}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, marginLeft: 2 }}>
              {env.IS_LOCAL &&
                AdminNavigation.map((nav) => <Link navigation={nav} key={nav.name} />)}
            </Box>
          </MenuList>
        </Box>

        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
          {SocialMedias.map((media) => (
            <MuiLink href={media.link} underline="none" key={media.link} target="_blank">
              <IconButton>
                <media.Icon />
              </IconButton>
            </MuiLink>
          ))}
        </Box>
      </StyledMobileDrawer>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};
