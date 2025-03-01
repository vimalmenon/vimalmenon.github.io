'use client';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Fragment } from 'react';
import { useAppContext } from '@context';
import { HeaderNavigation } from '@data';
import { Link } from '../Link';

export const Drawer: React.FC = () => {
  const { showDrawer, toggleDrawer } = useAppContext();
  return (
    <Fragment>
      <MuiDrawer anchor={'top'} open={showDrawer} onClose={toggleDrawer}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 2 }}>
          {HeaderNavigation.map((nav) => (
            <Link navigation={nav} key={nav.name} />
          ))}
        </Box>
      </MuiDrawer>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};
