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
  const [rounds, setRounds] = useState(
    Array.from(
      Array(7)
        .keys()
        .map((i) => new Round(i + 1))
    )
  );
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
  const getMaxRoundByPower = (count) => {
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
    2: 1,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
  };

  const round = useMemo(() => rounds[currentRound - 1], [rounds, currentRound]);

  const addPower = (power, showMessage) => {
    if (selectedPowers.find((p) => p.id === power.id)) return;

    const newPowerList = [...selectedPowers, power];

    if (newPowerList.length > 4) {
      showMessage?.("You can only have 4 powers");
      return;
    }

    setSelectedPowers(newPowerList);

    // Update rounds immediately
    setRounds((existingRounds) => {
      const updatedRounds = [];
      for (let i = 1; i <= maxRounds; i++) {
        const maxRoundPowers = allowedPowerCountByRound[i];
        const roundPowers =
          newPowerList.length <= maxRoundPowers
            ? newPowerList.map((power) => ({ ...power }))
            : newPowerList.slice(0, maxRoundPowers);
        const existingRound = existingRounds.find((r) => r.roundId === i);
        updatedRounds.push(new Round(i, roundPowers, existingRound.items));
      }
      return updatedRounds;
    });

    const maxRound = getMaxRoundByPower(newPowerList.length);
    if (maxRound !== currentRound) {
      setPendingRound(maxRound); // let useEffect handle navigation
    }
  };

  const removePower = (power) => {
    const newPowerList = selectedPowers.filter((p) => p.id !== power.id);
    setSelectedPowers(newPowerList);

    // Update rounds immediately
    setRounds((existingRounds) => {
      const updatedRounds = [];
      for (let i = 1; i <= maxRounds; i++) {
        const maxRoundPowers = allowedPowerCountByRound[i];
        const roundPowers =
          newPowerList.length <= maxRoundPowers
            ? newPowerList.map((power) => ({ ...power }))
            : newPowerList.slice(0, maxRoundPowers);
        const existingRound = existingRounds.find((r) => r.roundId === i);
        updatedRounds.push(new Round(i, roundPowers, existingRound.items));
      }
      return updatedRounds;
    });
  };

  const addItem = (item, showMessage) => {
    if (selectedItems.find((i) => i.id === item.id)) return;

    if (selectedItems.length >= 6) {
      showMessage?.("You can only have 6 items");
      return;
    }

    const newSelectedItems = [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    round.items = newSelectedItems;
  };

  const removeItem = (item) => {
    const newSelectedItems = selectedItems.filter((i) => i.id !== item.id);
    setSelectedItems(newSelectedItems);
    round.items = newSelectedItems;
  };

  const removePerkBuild = (perkType, perk) => {
    if (perkType === "power") {
      removePower(perk);
    }
    if (perkType === "item") {
      removeItem(perk);
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

  const changeRound = useCallback(
    (roundId) => {
      const round = rounds[roundId - 1];
      setSelectedPowers(round.powers);
      setSelectedItems(round.items);
      setCurrentRound(roundId);
    },
    [rounds]
  );

  const initRound = () => {
    // Init the full 7 rounds
    setRounds(
      Array.from(
        Array(7)
          .keys()
          .map((i) => new Round(i + 1))
      )
    );
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

  const currentlyPoweredRound = useMemo(() => {
    return getMaxRoundByPower(selectedPowers.length);
  }, [selectedPowers.length]);

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
        currentlyPoweredRound,
        maxRounds,
        estimatedCredits,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export const useBuild = () => useContext(BuildContext);
