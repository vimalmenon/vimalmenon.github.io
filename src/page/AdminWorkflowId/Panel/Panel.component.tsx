'use client';

import Box from '@mui/material/Box';
import { Icon } from '@component';
import { Icons } from '@data';
import { IPanel } from './Panel';

export const Panel: React.FC<IPanel> = ({ onCreateNode }) => {
  return (
    <Box>
      <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onCreateNode} />
      <Icon toolTip="Execute" icon={<Icons.Play />} />
    </Box>
  );
};
