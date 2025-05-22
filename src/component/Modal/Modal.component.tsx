import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Modal: React.FC = () => (
  <Dialog
    open={false}
    // slots={{
    //   transition: Transition,
    // }}
    keepMounted
    onClose={() => false}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => false}>Disagree</Button>
      <Button onClick={() => false}>Agree</Button>
    </DialogActions>
  </Dialog>
);
