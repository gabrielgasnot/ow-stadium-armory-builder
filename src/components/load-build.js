import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function LoadBuild(props) {
  const { importBuild } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (jsonData) => {
    setOpen(false);
    if (jsonData) {
      importBuild(jsonData);
    }
  };

  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onClick={handleClickOpen}
      >
        Upload a build
      </Button>
      <Dialog
        onClose={handleClose}
        open={open}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              handleClose(formJson ? JSON.parse(formJson.importData) : null);
            },
          },
        }}
      >
        <DialogTitle>Load your Armory build</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To load an existing build, please copy-paste the content of the file
            previously downloaded.
          </DialogContentText>
          <TextField fullWidth name="importData" />
        </DialogContent>
        <DialogActions>
          <IconButton type="submit" aria-label="OK">
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="Cancel" onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default LoadBuild;
