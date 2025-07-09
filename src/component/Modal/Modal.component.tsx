'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AsyncButton } from '../AsyncButton';
import { IModal } from './Modal';

export const Modal: React.FC<IModal> = ({ children, onClose, onConfirm, open, title }) => (
  <Dialog
    fullWidth={true}
    maxWidth="lg"
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
      <Button variant="outlined" onClick={onClose}>
        Close
      </Button>
      <AsyncButton onClick={onConfirm} variant="contained" loadingPosition="start">
        Confirm
      </AsyncButton>
    </DialogActions>
  </Dialog>
);
