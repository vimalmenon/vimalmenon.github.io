import Box from '@mui/material/Box';

import { ReactFlowColors } from '@data';

const size = '28px';

export const status = [
  { color: ReactFlowColors.New, label: 'New' },
  { color: ReactFlowColors.Ready, label: 'Ready' },
  { color: ReactFlowColors.Running, label: 'Running' },
  { color: ReactFlowColors.Complete, label: 'Complete' },
  { color: ReactFlowColors.Failed, label: 'Failed' },
];

export const ReactFlowLegend: React.FC = () => (
  <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 1 }}>
    {status.map(({ color, label }) => (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          gap: 1,
          justifyContent: 'space-between',
          minWidth: '200px',
        }}
        key={color}
      >
        <Box sx={{ display: 'flex', fontSize: '14px' }}>
          <b>{label}</b>
        </Box>
        <Box
          sx={{
            background: color,
            border: '1px solid gray',
            display: 'flex',
            height: size,
            width: size,
          }}
        />
      </Box>
    ))}
  </Box>
);
