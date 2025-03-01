'use client';
import { useAppContext } from '@context';
import MuiDrawer from '@mui/material/Drawer';
import { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export const Drawer: React.FC = () => {
  const { showDrawer, toggleDrawer } = useAppContext();
  return (
    <Fragment>
      <MuiDrawer anchor={'top'} open={showDrawer} onClose={toggleDrawer}>
        <div>this is vimal menon</div>
      </MuiDrawer>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};
