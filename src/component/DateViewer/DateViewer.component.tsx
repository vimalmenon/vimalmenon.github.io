import Box from '@mui/material/Box';

import { formatDate, showDateDetails } from '@utility';

import { IDateViewer } from './DateViewer';

export const DateViewer: React.FC<IDateViewer> = ({ date, sx }) => (
  <Box sx={sx}>
    <span>{formatDate(date)}</span>
    <span>{showDateDetails(date)}</span>
  </Box>
);
