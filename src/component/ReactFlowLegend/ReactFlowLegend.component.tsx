import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { ReactFlowColors } from '@data';

const size = '30px';

export const status = [
  { color: ReactFlowColors.Complete, label: 'Complete' },
  { color: ReactFlowColors.Ready, label: 'Ready' },
  { color: ReactFlowColors.Running, label: 'Running' },
  { color: ReactFlowColors.New, label: 'New' },
  { color: ReactFlowColors.Failed, label: 'Failed' },
];

export const ReactFlowLegend: React.FC = () => (
  <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, margin: 1 }}>
    {status.map(({ color, label }) => (
      <Fragment key={label}>
        <Box sx={{ fontSize: '12px' }}>{label}</Box>
        <Box
          sx={{
            background: color,
            display: 'flex',
            height: size,
            width: size,
          }}
        />
      </Fragment>
    ))}
  </Box>
);
