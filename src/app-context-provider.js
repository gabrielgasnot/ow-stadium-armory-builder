import React, { useState } from "react";
import exportBuild from "./services/export-build";
import { basicItems, heroes } from "./db/db";
import AppContext from "./app-context";

const MyProvider = ({ children }) => {
  const [currentHero, setCurrentHero] = useState(undefined);
  const [heroPowers, setHeroPowers] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [shareLink, setShareLink] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarCategory, setSnackBarCategory] = useState("");
  const [perkSummaryOpen, setPerkSummaryOpen] = useState(false);
  const [perkPopupAnchorEl, setPerkPopupAnchorEl] = useState(null);
  const [summaryPerk, setSummaryPerk] = useState(null);
  const [placement, setPlacement] = useState("bottom");

  const loadHero = (selectedHero) => {
    setSelectedPowers([]);
    setSelectedItems([]);
    setSnackBarMessage("");
    setCurrentHero(selectedHero);

    if (selectedHero) {
      const hero = heroes.find((h) => h.id === selectedHero.id);

      if (hero) {
        setHeroPowers(hero.powers ?? []);
        setHeroItems(hero.items ?? []);
      }
    }
  };

  const showMessage = (message, category = "error") => {
    setSnackBarCategory(category);
    setSnackBarMessage(message);
  };

  const addPower = (power) => {
    if (selectedPowers.find((selectedPower) => selectedPower.id === power.id)) {
      return;
    }

    if (selectedPowers.length >= 4) {
      showMessage("You can only have 4 powers");
      return;
    }

    setSelectedPowers([...selectedPowers, power]);
  };

  const addItem = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
      return;
    }

    if (selectedItems.length >= 6) {
      showMessage("You can only have 6 items");
      return;
    }

    setSelectedItems([...selectedItems, item]);
  };

  const removePerkBuild = (perkType, perk) => {
    if (perkType === "power") {
      setSelectedPowers(selectedPowers.filter((power) => power.id !== perk.id));
    }
    if (perkType === "item") {
      setSelectedItems(selectedItems.filter((item) => item.id !== perk.id));
    }
  };

  const addPerkBuild = (perkType, perk) => {
    if (perkType === "power") {
      addPower(perk);
    }
    if (perkType === "item") {
      addItem(perk);
    }
  };

  const shareBuild = () => {
    const encodedBuild = exportBuild(
      currentHero,
      selectedPowers,
      selectedItems
    );
    let baseUrl = window.location.origin + window.location.pathname;
    if (!baseUrl.endsWith("/")) {
      baseUrl += "/";
    }
    const newShareLink = `${baseUrl}#/${encodedBuild}`;
    setShareLink(newShareLink);
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

  // Positioning
  const calculatePlacement = (target) => {
    const rect = target?.getBoundingClientRect();
    if (!rect) return;

    const screenHeight = window.innerHeight;
    const spaceAbove = rect.top;
    const spaceBelow = screenHeight - rect.bottom;

    if (spaceAbove > spaceBelow) {
      setPlacement("top"); // Show above if there's more space above the element
    } else {
      setPlacement("bottom"); // Show below if there's more space below the element
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentHero,
        setCurrentHero,
        heroPowers,
        setHeroPowers,
        heroItems,
        setHeroItems,
        selectedPowers,
        setSelectedPowers,
        selectedItems,
        setSelectedItems,
        shareLink,
        setShareLink,
        snackBarMessage,
        setSnackBarMessage,
        snackBarCategory,
        setSnackBarCategory,
        loadHero,
        showMessage,
        addPower,
        removePerkBuild,
        addPerkBuild,
        shareBuild,
        heroes,
        basicItems,
        perkSummaryOpen,
        setPerkSummaryOpen,
        perkPopupAnchorEl,
        setPerkPopupAnchorEl,
        summaryPerk,
        setSummaryPerk,
        handleShowPerkSummary,
        handleHidePerkSummary,
        placement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MyProvider;
