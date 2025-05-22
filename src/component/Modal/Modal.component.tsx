'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IModal } from './Modal';

export const Modal: React.FC<IModal> = ({ children, onClose, open, title }) => (
  <Dialog
    open={open}
    // slots={{
    //   transition: Transition,
    // }}
    keepMounted
    onClose={onClose}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
      <Button onClick={() => false}>Submit</Button>
    </DialogActions>
  </Dialog>
);
