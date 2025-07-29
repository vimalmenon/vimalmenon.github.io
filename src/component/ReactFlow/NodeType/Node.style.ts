'use client';

import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import { ReactFlowColors } from '@data';
import { INodeStyled } from './NodeType';

export const NodeStyled = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isComplete' && prop !== 'isReady',
})<INodeStyled>(({ isComplete, isReady, theme }) => {
  if (isComplete) {
    return {
      backgroundColor: ReactFlowColors.Complete,
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
      minWidth: '400px',
      padding: '10px',
    };
  }
  if (isReady) {
    return {
      backgroundColor: ReactFlowColors.Ready,
      borderRadius: '5px',
      minWidth: '400px',
      padding: '10px',
    };
  }
  return {
    backgroundColor: ReactFlowColors.New,
    borderRadius: '5px',
    minWidth: '400px',
    padding: '10px',
  };
});
