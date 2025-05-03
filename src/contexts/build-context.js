import { createContext, useContext, useState, useEffect } from "react";
import exportBuild from "../services/export-build";
import { useHero } from "./hero-context";

const BuildContext = createContext();

class Round {
  constructor(roundId, powers = [], items = []) {
    this.roundId = roundId;
    this.powers = powers;
    this.items = items;
  }
}

export const BuildProvider = ({ children }) => {
  const { currentHero, loadHero } = useHero();

  const [rounds, setRounds] = useState([]);
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

  const saveRound = (roundId, powers, items, prevRounds) => {
    const updated = [...prevRounds];
    const index = updated.findIndex((r) => r.roundId === roundId);
    const updatedRound = new Round(roundId, powers, items);

    if (index === -1) {
      updated.push(updatedRound);
    } else {
      updated[index] = updatedRound;
    }

    return updated;
  };

  const changeRound = (roundId) => {
    setRounds((prevRounds) => {
      let updated = saveRound(
        currentRound,
        selectedPowers,
        selectedItems,
        prevRounds
      );

      while (updated.length < roundId) {
        updated = saveRound(
          updated.length + 1,
          selectedPowers,
          selectedItems,
          updated
        );
      }

      const nextRound = updated.find((r) => r.roundId === roundId);
      setSelectedPowers(nextRound?.powers ?? []);
      setSelectedItems(nextRound?.items ?? []);

      return updated;
    });

    setCurrentRound(roundId);
  };

  const initRound = () => {
    const initialRound = new Round(1);
    setRounds([initialRound]);
    setCurrentRound(1);
    setSelectedPowers([]);
    setSelectedItems([]);
  };

  const resetBuild = () => {
    setSelectedPowers([]);
    setSelectedItems([]);
    setEncodedBuildId("");
    setShareLink("");
    initRound();
  };

  // auto save round powers/items
  useEffect(() => {
    setRounds((prevRounds) =>
      saveRound(currentRound, selectedPowers, selectedItems, prevRounds)
    );
  }, [selectedPowers, selectedItems, currentRound]);

  // automatically creates round based on number of powers
  useEffect(() => {
    const getMaxRound = (powerCount) => {
      switch (powerCount) {
        case 2:
          return 3;
        case 3:
          return 5;
        case 4:
          return 7;
        default:
          return 1;
      }
    };

    const neededRounds = getMaxRound(selectedPowers.length);

    if (rounds.length < neededRounds) {
      setRounds((prevRounds) => {
        let updated = [...prevRounds];

        // Save current round before cloning
        updated = saveRound(
          currentRound,
          selectedPowers,
          selectedItems,
          updated
        );

        for (let i = updated.length + 1; i <= neededRounds; i++) {
          updated = saveRound(i, selectedPowers, selectedItems, updated);
        }

        return updated;
      });
    }
  }, [selectedPowers, selectedItems, currentRound, rounds.length]);

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
        changeRound,
        resetBuild,
        initBuild,
        rounds,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export const useBuild = () => useContext(BuildContext);
