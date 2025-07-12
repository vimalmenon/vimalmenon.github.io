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
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Icon
          toolTip="Expand"
          icon={<Icons.OpenInNew fontSize="small" />}
          disabled={disableExecute}
          onClick={() => data.onSelect(data.node)}
        />
      </Box>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </NodeStyled>
  );
};
