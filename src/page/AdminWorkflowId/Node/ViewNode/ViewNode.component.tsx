'use client';
import Box from '@mui/material/Box';

export const ViewNode: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Item</Box>
        <Box>
          {/* <IconButton onClick={onEdit}>
            <Icons.Edit />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};
