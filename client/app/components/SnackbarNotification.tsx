import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackbarNotification({
  open,
  handleClose,
  message,
  type,
}: {
  open: boolean;
  handleClose: () => void;
  message: string;
  type: "success" | "error";
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
