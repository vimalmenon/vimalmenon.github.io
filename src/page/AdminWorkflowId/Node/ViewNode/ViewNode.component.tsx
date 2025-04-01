'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icons } from '@data';
import { nodeType } from '../Node.service';
import { IViewNode } from './ViewNode';

export const ViewNode: React.FC<IViewNode> = ({ data, onDelete, onEdit }) => {
  const value = nodeType(data.type);
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Node Item</Box>
        <Box>
          <IconButton onClick={onDelete}>
            <Icons.Delete />
          </IconButton>
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
        <Box>Type</Box>
        <Box>{data.type}</Box>
      </Box>
      {value.includes('LLM') ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>LLM</Box>
          <Box>{data.llm}</Box>
        </Box>
      ) : null}
      {value.includes('Prompt') ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Prompt</Box>
          <Box>{data.prompt}</Box>
        </Box>
      ) : null}
      {value.includes('Tools') ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Tools</Box>
          <Box>{data.tools.join(', ')}</Box>
        </Box>
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Next</Box>
        <Box>{data.next}</Box>
      </Box>
    </Box>
  );
};
