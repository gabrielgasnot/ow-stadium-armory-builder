import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
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

  const maxRounds = 7;
  const [rounds, setRounds] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [encodedBuildId, setEncodedBuildId] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [hoverPerk, setHoverPerk] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [pendingRound, setPendingRound] = useState(null);

  const estimatedCredits = useMemo(() => {
    return 3500 + (currentRound - 1) * 10000;
  }, [currentRound]);

  const initBuild = (selectedHero) => {
    resetBuild();
    loadHero(selectedHero); // Charger les pouvoirs/items du héros
  };
  const getMaxRound = (count) => {
    switch (count) {
      case 1:
        return 1;
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

  const allowedPowerCountByRound = {
    1: 1,
    3: 2,
    5: 3,
    7: 4,
  };

  const addPower = (power, showMessage) => {
    if (selectedPowers.find((p) => p.id === power.id)) return;

    const newPowerList = [...selectedPowers, power];

    if (newPowerList.length > 4) {
      showMessage?.("You can only have 4 powers");
      return;
    }

    const maxRound = getMaxRound(newPowerList.length);

    if (currentRound >= maxRound) {
      setSelectedPowers(newPowerList);
      return;
    }

    const basePowers =
      newPowerList.length > 1 ? newPowerList.slice(0, -1) : newPowerList;

    // Update rounds immediately
    setRounds((prevRounds) => {
      const updatedRounds = [];
      for (let i = 1; i <= maxRound; i++) {
        const powers = i === maxRound ? newPowerList : basePowers;
        const existing = prevRounds.find((r) => r.roundId === i);
        const items = existing?.items || selectedItems;
        const existingPowers = existing?.powers || powers;
        updatedRounds.push(new Round(i, existingPowers, items));
      }
      return updatedRounds;
    });

    const maxAllowed =
      Object.entries(allowedPowerCountByRound)
        .reverse()
        .find(([round]) => currentRound >= +round)?.[1] ?? 1;

    const allowedPowers = newPowerList.slice(0, maxAllowed);
    setSelectedPowers(allowedPowers);

    if (maxRound !== currentRound) {
      setPendingRound(maxRound); // let useEffect handle navigation
    }
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

  const addPerkBuild = async (perkType, perk, showMessage) => {
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

  const changeRound = useCallback(
    (roundId) => {
      setRounds((prevRounds) => {
        let updated = saveRound(
          currentRound,
          selectedPowers,
          selectedItems,
          prevRounds
        );

        while (updated.length < roundId) {
          console.debug("in the loop");
          updated = saveRound(
            updated.length + 1,
            selectedPowers,
            selectedItems,
            updated
          );
        }

        // Look for next round
        const nextRound = updated.find((r) => r.roundId === roundId);

        // init with potential existing items/powers
        let nextPowers = nextRound?.powers ?? [];
        let nextItems = nextRound?.items ?? [];

        // if no power => look in the previous rounds.
        if (nextPowers.length === 0) {
          for (let i = roundId - 1; i >= 1; i--) {
            const prev = updated.find((r) => r.roundId === i);
            if (prev) {
              if (nextPowers.length === 0 && prev.powers.length > 0) {
                nextPowers = prev.powers;
              }

              if (nextPowers.length > 0) break;
            }
          }
        }

        setSelectedPowers(nextPowers);
        setSelectedItems(nextItems);
        console.debug("setRounds in changeRound ", roundId);
        return updated;
      });

      setCurrentRound(roundId);
    },
    [currentRound, selectedItems, selectedPowers]
  );

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

  useEffect(() => {
    if (pendingRound !== null) {
      changeRound(pendingRound);
      setPendingRound(null);
    }
  }, [pendingRound, changeRound]);

  return (
    <BuildContext.Provider
      value={{
        selectedPowers,
        selectedItems,
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
        maxRounds,
        estimatedCredits,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export const useBuild = () => useContext(BuildContext);
