'use client';
import Box from '@mui/material/Box';
import { useAppContext } from '@context';

export const AcceptCookie: React.FC = () => {
  const { showAcceptCookie } = useAppContext();
  if (showAcceptCookie) {
    return <Box>This is Accept cookie</Box>;
  }
  return null;
};
