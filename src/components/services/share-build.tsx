import { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { t } from "i18next";

interface ShareBuildModalProps {
  encodedBuildId: string;
  generatedLink: string;
  close: () => void;
}

function ShareBuildModal({
  encodedBuildId,
  generatedLink,
  close,
}: ShareBuildModalProps) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopy = (targetText: string) => {
    if (targetText) {
      navigator.clipboard
        .writeText(targetText)
        .then(() => {
          setOpenSnackbar(true);
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Dialog
      open={!!generatedLink}
      onClose={close}
      maxWidth={false} // Allow custom width via sx prop
      fullWidth={true} // Make the dialog take full width up to the max width
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "90%", sm: "60%", md: "50%", lg: "40%" }, // Responsive width
        },
      }}
    >
      <DialogTitle>{t("shareBuild")}</DialogTitle>
      <DialogContent>
        <TextField
          label={t("buildId")}
          value={encodedBuildId}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              readOnly: true,
              endAdornment: (
                <IconButton
                  onClick={() => handleCopy(encodedBuildId)}
                  sx={{
                    transition: "color 0.3s ease",
                    color: (theme) => theme.palette.text.primary,
                    "&:hover": {
                      color: (theme) => theme.palette.custom.blue,
                    },
                  }}
                >
                  <ContentCopy />
                </IconButton>
              ),
            },
          }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />

        <TextField
          label={t("linkBuild")}
          value={generatedLink}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              readOnly: true,
              endAdornment: (
                <IconButton
                  onClick={() => handleCopy(generatedLink)}
                  sx={{
                    transition: "color 0.3s ease",
                    color: (theme) => theme.palette.text.primary,
                    "&:hover": {
                      color: (theme) => theme.palette.custom.blue,
                    },
                  }}
                >
                  <ContentCopy />
                </IconButton>
              ),
            },
          }}
          sx={{ marginBottom: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={close}>
          {t("close")}
        </Button>
      </DialogActions>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {t("linkCopied")}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default ShareBuildModal;
