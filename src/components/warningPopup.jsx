import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
// import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    // <Draggable
    //   handle="#draggable-dialog-title"
    //   cancel={'[class*="MuiDialogContent-root"]'}
    // >
    <Paper {...props} />
    // </Draggable>
  );
}

export default function WarningPopup({ isOpen, handleWarning, url }) {
  const [open, setOpen] = React.useState(isOpen);
  //   console.log(isOpen, "opennnnnn");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
  };

  const handleOkay = () => {
    // setOpen(false);
    handleWarning();
    window.open(
      url,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Huluhaslivesports.com says
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are leaving Huluhaslivesports.com
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleWarning} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOkay} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
