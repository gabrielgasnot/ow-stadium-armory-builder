import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";

function ImportBuildModal({ open, onClose, onImport }) {
  const [buildId, setBuildId] = useState("");
  const [showError, setShowError] = useState(false);

  const handleImport = () => {
    if (buildId.trim()) {
      onImport(buildId.trim());
      setBuildId(""); // Clear input
      onClose(); // Close modal
    } else {
      setShowError(true);
    }
  };

  const handleCloseSnackbar = () => {
    setShowError(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      disableRestoreFocus
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "90%", sm: "60%", md: "50%", lg: "40%" },
        },
      }}
    >
      <DialogTitle>Import a Build</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Paste build ID"
          value={buildId}
          onChange={(e) => setBuildId(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleImport}
          color="primary"
          variant="contained"
          sx={{
            color: theme => theme.palette.common.white,
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: theme => theme.palette.custom.blue,
            },
          }}
        >
          Import
        </Button>
      </DialogActions>

      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Please enter a valid build ID!
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default ImportBuildModal;
