import Box from '@mui/material/Box';

import { IDateViewer } from './DateViewer';

// TODO: implement the logic for date
const showDateDetails = (date: string): string => {
  const now = new Date();
  const inputDate = new Date(date);
  const diffMs = now.getTime() - inputDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30); // Approximate months

  if (diffMonths > 0) {
    return `${diffMonths} month${diffMonths === 1 ? '' : 's'} old`;
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} old`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours === 1 ? '' : 's'} old`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} old`;
  } else {
    return 'just now';
  }
};

export const DateViewer: React.FC<IDateViewer> = ({ date, sx }) => (
  <Box sx={sx}>
    <span>{date}</span>
    <span>{showDateDetails(date)}</span>
  </Box>
);
