import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackbarAlert = ({ message, onClose }) => (
  <Snackbar
    open={Boolean(message)}
    autoHideDuration={3000}
    onClose={onClose}
  >
    <MuiAlert
      elevation={6}
      variant="filled"
      onClose={onClose}
      severity="success"
    >
      {message}
    </MuiAlert>
  </Snackbar>
);

export default SnackbarAlert;
