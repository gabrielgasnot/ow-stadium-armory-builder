import { createContext, useContext, useState } from "react";
import exportBuild from "../services/export-build";
import { useHero } from "./hero-context";

const BuildContext = createContext();

export const BuildProvider = ({ children }) => {
  const { currentHero, loadHero } = useHero();

  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [encodedBuildId, setEncodedBuildId] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [hoverPerk, setHoverPerk] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);

  const initBuild = (selectedHero) => {
    resetBuild();
    loadHero(selectedHero); // Charger les pouvoirs/items du héros
  };

  const addPower = (power, showMessage) => {
    if (selectedPowers.find((p) => p.id === power.id)) return;

    if (selectedPowers.length >= 4) {
      showMessage?.("You can only have 4 powers");
      return;
    }

    setSelectedPowers([...selectedPowers, power]);
  };

  const addItem = (item, showMessage) => {
    if (selectedItems.find((i) => i.id === item.id)) return;

    if (selectedItems.length >= 6) {
      showMessage?.("You can only have 6 items");
      return;
    }

    setSelectedItems([...selectedItems, item]);
  };

  const removePerkBuild = (perkType, perk) => {
    if (perkType === "power") {
      setSelectedPowers((prev) => prev.filter((p) => p.id !== perk.id));
    }
    if (perkType === "item") {
      setSelectedItems((prev) => prev.filter((i) => i.id !== perk.id));
    }
    setHoverPerk(perk);
  };

  const addPerkBuild = (perkType, perk, showMessage) => {
    if (perkType === "power") addPower(perk, showMessage);
    if (perkType === "item") addItem(perk, showMessage);
    setHoverPerk(null);
  };

  const shareBuild = () => {
    const encodedBuild = exportBuild(
      currentHero,
      selectedPowers,
      selectedItems
    );
    let baseUrl = window.location.origin + window.location.pathname;
    if (!baseUrl.endsWith("/")) baseUrl += "/";
    const newShareLink = `${baseUrl}#/${encodedBuild}`;

    setEncodedBuildId(encodedBuild);
    setShareLink(newShareLink);
  };

  const resetBuild = () => {
    setSelectedPowers([]);
    setSelectedItems([]);
    setEncodedBuildId("");
    setShareLink("");
    setCurrentRound(1);
  };

  return (
    <BuildContext.Provider
      value={{
        selectedPowers,
        setSelectedPowers,
        selectedItems,
        setSelectedItems,
        encodedBuildId,
        setEncodedBuildId,
        shareLink,
        setShareLink,
        addPower,
        addItem,
        removePerkBuild,
        addPerkBuild,
        shareBuild,
        hoverPerk,
        setHoverPerk,
        currentRound,
        setCurrentRound,
        resetBuild,
        initBuild,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export const useBuild = () => useContext(BuildContext);
