'use client';

import Box from '@mui/material/Box';
import { useAppContext } from '@context';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';

export const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useAppContext();
  return (
    <Box>
      <IconButton onClick={toggleTheme}>
        {theme === 'light' ? <Brightness4Icon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};
