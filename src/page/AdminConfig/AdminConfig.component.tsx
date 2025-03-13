import Box from '@mui/material/Box';
import { env } from '@data';
import { SelectTheme } from './SelectTheme';

export const AdminConfig: React.FC = () => {
  return (
    <Box>
      <Box>Env Value</Box>
      <Box sx={{ marginY: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>ENV</Box>
          <Box>{env.ENV}</Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>API</Box>
          <Box>{env.API}</Box>
        </Box>
      </Box>
      <Box>Select a Theme</Box>
      <SelectTheme />
    </Box>
  );
};
