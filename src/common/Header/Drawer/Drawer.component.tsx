'use client';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import { Fragment } from 'react';
import { useAppContext } from '@context';
import { HeaderNavigation, SocialMedias } from '@data';
import { Link } from '../Link';
import { MobileDrawer } from './Drawer.style';

export const Drawer: React.FC = () => {
  const { showDrawer, toggleDrawer } = useAppContext();
  return (
    <Fragment>
      <MobileDrawer anchor={'top'} open={showDrawer} onClose={toggleDrawer}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 2 }}>
          {HeaderNavigation.map((nav) => (
            <Link navigation={nav} key={nav.name} />
          ))}
        </Box>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
          {SocialMedias.map((media) => {
            return (
              <MuiLink href={media.link} underline="none" key={media.link} target="_blank">
                <IconButton>
                  <media.Icon />
                </IconButton>
              </MuiLink>
            );
          })}
        </Box>
      </MobileDrawer>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};
