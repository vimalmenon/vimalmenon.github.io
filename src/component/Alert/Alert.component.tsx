'use client';

import MuiAlert from '@mui/material/Alert';
import { IAlert } from './Alert';

export const Alert: React.FC<IAlert> = ({ children, onClose, severity }) => (
  <MuiAlert severity={severity} variant="outlined" onClose={onClose}>
    {children}
  </MuiAlert>
);
