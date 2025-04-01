'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Icon } from '@component';
import { Icons } from '@data';
import { IPanel } from './Panel';

export const Panel: React.FC<IPanel> = ({ onCreateNode, onExecute }) => {
  return (
    <Box component={Paper}>
      <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onCreateNode} />
      <Icon toolTip="Execute" icon={<Icons.Play />} onClick={onExecute} />
    </Box>
  );
};
