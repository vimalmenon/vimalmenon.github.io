import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IIcon } from './Icon.d';

export const Icon: React.FC<IIcon> = ({ icon, onClick, toolTip }) => {
  return (
    <Tooltip title={toolTip}>
      <IconButton onClick={onClick}>{icon}</IconButton>
    </Tooltip>
  );
};
