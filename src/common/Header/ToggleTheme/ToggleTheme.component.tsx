'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useAppContext } from '@context';

export const ToggleTheme: React.FC = () => {
  const { mode, toggleMode } = useAppContext();
  return (
    <Box>
      <IconButton onClick={toggleMode}>
        {mode === 'light' ? <Brightness4Icon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};
