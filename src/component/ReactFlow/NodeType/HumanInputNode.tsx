'use client';

import Box from '@mui/material/Box';
import { useState } from 'react';
import { TextInput } from '@component';
import { Enums } from '@data';
import { BaseNode } from './BaseNode';
import { INodeType } from './NodeType';

export const HumanInputNode: React.FC<INodeType> = ({ data }) => {
  const [value, setValue] = useState<string>(data.data ?? '');
  const isReady = data.status === Enums.WorkflowNodeStatus.READY;
  return (
    <BaseNode
      data={data}
      disableExecute={!value}
    >
      <Box sx={{ borderRadius: '5px', padding: 1 }}>
        <TextInput
          value={value}
          label="Human Input"
          placeholder="Name"
          name="humanInput"
          onChange={(e) => setValue(e.target.value)}
          disabled={!isReady}
        />
      </Box>
    </BaseNode>
  );
};
