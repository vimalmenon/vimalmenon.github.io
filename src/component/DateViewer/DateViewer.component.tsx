import Box from '@mui/material/Box';

import { formatDate, getTimeElapsed } from '@utility';

import { IDateViewer } from './DateViewer';

export const DateViewer: React.FC<IDateViewer> = ({ date, sx }) => (
  <Box sx={sx}>
    <span>{formatDate(date)}</span>
    <span style={{ marginLeft: 8 }}>{getTimeElapsed(date)}</span>
  </Box>
);
