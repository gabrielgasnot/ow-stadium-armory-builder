import { useState } from "react";
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
import { useTranslation } from "react-i18next";

interface ImportBuildModalProps {
  open: boolean;
  onClose: () => void;
  onImport: (buildId: string) => void;
}

function ImportBuildModal({ open, onClose, onImport }: ImportBuildModalProps) {
  const { t } = useTranslation("common");
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
      <DialogTitle>{t("importBuild")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label={t("pasteBuild")}
          value={buildId}
          onChange={(e) => setBuildId(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("cancel")}</Button>
        <Button
          onClick={handleImport}
          color="primary"
          variant="contained"
          sx={{
            color: (theme) => theme.palette.common.white,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.custom.blue,
            },
          }}
        >
          {t("import")}
        </Button>
      </DialogActions>

      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {t("invalidBuildId")}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default ImportBuildModal;
