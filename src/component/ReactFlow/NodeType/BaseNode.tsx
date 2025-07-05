'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Handle, Position } from '@xyflow/react';
import { Icon } from '@component';
import { Enums, Icons } from '@data';
import { IReactChildren } from '@types';
import { NodeStyled } from './Node.style';
import { IBaseNodeType } from './NodeType';

export const BaseNode: React.FC<IReactChildren & IBaseNodeType> = ({
  children,
  data,
  disableExecute = false,
  onExecute,
}) => {
  const isReady = data.status === Enums.WorkflowNodeStatus.READY;
  const isComplete = data.status === Enums.WorkflowNodeStatus.COMPLETED;
  return (
    <NodeStyled isComplete={isComplete} isReady={isReady}>
      <Box
        sx={{
          alignItems: 'center',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
        }}
      >
        <span>
          {data.label} ({data.type})
        </span>
        {isReady ? (
          <Icon
            toolTip="Execute"
            icon={<Icons.Play />}
            disabled={disableExecute}
            onClick={onExecute}
          />
        ) : null}
      </Box>
      <Divider />
      {children}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </NodeStyled>
  );
};
