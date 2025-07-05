'use client';

import { styled } from '@mui/material';
import { blueGrey, lightBlue, lightGreen } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { INodeStyled } from './NodeType';

export const NodeStyled = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isComplete' && prop !== 'isReady',
})<INodeStyled>(({ isComplete, isReady }) => {
  if (isComplete) {
    return {
      backgroundColor: lightGreen[100],
      borderRadius: '5px',
      minWidth: '400px',
      padding: '10px',
    };
  }
  if (isReady) {
    return {
      backgroundColor: lightBlue[100],
      borderRadius: '5px',
      minWidth: '400px',
      padding: '10px',
    };
  }
  return {
    backgroundColor: blueGrey[50],
    borderRadius: '5px',
    minWidth: '400px',
    padding: '10px',
  };
});
