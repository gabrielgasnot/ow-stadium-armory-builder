import { useState } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import STORAGE_KEYS from "../../constants/storage-keys";

const LanguageSelector = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [open, setOpen] = useState(false);
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: SelectChangeEvent<string>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  };

  return (
    <FormControl
      variant="standard"
      onClick={() => {
        console.log("update open to ", !open);
        setOpen(!open);
      }}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}language-picker.png`}
        alt="Language"
        style={{
          width: 36,
          height: 36,
          marginRight: 6,
          display: "block",
        }}
      />
      <Select
        open={open}
        value={currentLang}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        onChange={(e) => {
          handleChange(e);
          setOpen(false);
        }}
        disableUnderline={isXs}
        sx={{
          "& .MuiSelect-select": {
            display: {
              xs: "none",
              sm: "block",
            },
          },
          minWidth: 10,
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
