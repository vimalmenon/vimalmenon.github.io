'use client';

import { styled } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { INodeStyled } from './NodeType';

export const NodeStyled = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isComplete',
})<INodeStyled>(({ isComplete }) => {
  if (isComplete) {
    return {
      backgroundColor: lightGreen[100],
      borderRadius: '5px',
      minWidth: '400px',
      padding: '10px',
    };
  }
  return {
    borderRadius: '5px',
    minWidth: '400px',
    padding: '10px',
  };
});
