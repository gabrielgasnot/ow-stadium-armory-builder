import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarCategory, setSnackBarCategory] = useState("");

  const [perkSummaryOpen, setPerkSummaryOpen] = useState(false);
  const [perkPopupAnchorEl, setPerkPopupAnchorEl] = useState(null);
  const [summaryPerk, setSummaryPerk] = useState(null);
  const [placement, setPlacement] = useState("bottom");
  const [hoverPerk, setHoverPerk] = useState(null);
  const [hoverAttributes, setHoverAttributes] = useState([]);

  const showMessage = (message, category = "error") => {
    setSnackBarCategory(category);
    setSnackBarMessage(message);
  };

  const handleShowPerkSummary = (event, perk) => {
    setPerkPopupAnchorEl(event.currentTarget);
    setSummaryPerk(perk);
    setPerkSummaryOpen(true);
    calculatePlacement(event.currentTarget);
  };

  const handleHidePerkSummary = () => {
    setPerkSummaryOpen(false);
    setPerkPopupAnchorEl(null);
    setSummaryPerk(null);
  };

  const calculatePlacement = (target) => {
    const rect = target?.getBoundingClientRect();
    if (!rect) return;

    const screenHeight = window.innerHeight;
    const spaceAbove = rect.top;
    const spaceBelow = screenHeight - rect.bottom;

    setPlacement(spaceAbove > spaceBelow ? "top" : "bottom");
  };

  const updateHoverAttributes = (next) => {
    if (
      Array.isArray(next) &&
      (next.length !== hoverAttributes.length ||
        !next.every((val, idx) => val === hoverAttributes[idx]))
    ) {
      setHoverAttributes(next);
    }
  };

  return (
    <UIContext.Provider
      value={{
        snackBarMessage,
        setSnackBarMessage,
        snackBarCategory,
        setSnackBarCategory,
        showMessage,
        perkSummaryOpen,
        setPerkSummaryOpen,
        perkPopupAnchorEl,
        setPerkPopupAnchorEl,
        summaryPerk,
        setSummaryPerk,
        handleShowPerkSummary,
        handleHidePerkSummary,
        placement,
        hoverPerk,
        setHoverPerk,
        hoverAttributes,
        updateHoverAttributes,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
