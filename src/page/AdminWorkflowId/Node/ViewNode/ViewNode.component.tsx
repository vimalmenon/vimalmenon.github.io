'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icons } from '@data';
import { IViewNode } from './ViewNode';

export const ViewNode: React.FC<IViewNode> = ({ data, onEdit }) => {
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Node Item</Box>
        <Box>
          <IconButton onClick={onEdit}>
            <Icons.Edit />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>ID</Box>
        <Box>{data.id}</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Name</Box>
        <Box>{data.name}</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Prompt</Box>
        <Box>{data.prompt}</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Type</Box>
        <Box>{data.type}</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>LLM</Box>
        <Box>{data.llm}</Box>
      </Box>
    </Box>
  );
};
