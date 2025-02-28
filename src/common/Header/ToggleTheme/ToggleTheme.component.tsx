import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';

export const ToggleTheme: React.FC = () => {
  return (
    <div>
      <IconButton>
        <Brightness4Icon />
      </IconButton>
      <IconButton>
        <LightModeIcon />
      </IconButton>
    </div>
  );
};
