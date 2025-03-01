'use client';
import Box from '@mui/material/Box';

import { useAppContext } from '@context';
import MuiDrawer from '@mui/material/Drawer';
import { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { HeaderNavigation } from '@data';
import { Link } from '../Link';

export const Drawer: React.FC = () => {
  const { showDrawer, toggleDrawer } = useAppContext();
  return (
    <Fragment>
      <MuiDrawer anchor={'top'} open={showDrawer} onClose={toggleDrawer}>
        <Box sx={{ padding: 2, gap: 1, display: 'flex', flexDirection: 'column' }}>
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
