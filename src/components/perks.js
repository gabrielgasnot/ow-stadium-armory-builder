import React from "react";
import { Stack, Box, Tabs, Tab } from "@mui/material";
import Powers from "./powers.js";
import GroupItems from "./group-items.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (value !== index) {
    return null;
  }

  return (
    <Box
      role="tabpanel"
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      sx={{
        p: 2,
        height: "100%",
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
}

function Perks({
  powers,
  generalItems,
  items,
  selectPerk,
  getPerkColor,
  selectedItems,
  selectedPowers,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  if (!powers || !items || !generalItems) {
    return "No perk available for this hero";
  }

  // 👇 Centralized tab definition
  const tabConfig = [
    {
      label: "Weapon",
      content: (
        <GroupItems
          basicItems={generalItems}
          items={items}
          category="Weapon"
          selectItem={selectPerk}
          selectedIds={selectedItems}
          getColor={getPerkColor}
        />
      ),
    },
    {
      label: "Ability",
      content: (
        <GroupItems
          basicItems={generalItems}
          items={items}
          category="Ability"
          selectItem={selectPerk}
          selectedIds={selectedItems}
          getColor={getPerkColor}
        />
      ),
    },
    {
      label: "Survival",
      content: (
        <GroupItems
          basicItems={generalItems}
          items={items}
          category="Survival"
          selectItem={selectPerk}
          selectedIds={selectedItems}
          getColor={getPerkColor}
        />
      ),
    },
    {
      label: "Powers",
      content: (
        <Powers
          powers={powers}
          selectPower={selectPerk}
          selectedIds={selectedPowers}
        />
      ),
    },
  ];

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Tabs navigation */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabConfig.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              minWidth: { xs: 100, sm: 120 }, // wider touch targets on small devices
              fontSize: { xs: "0.9rem", sm: "1.2rem" },
              paddingX: { xs: 2, sm: 3 },
              paddingY: { xs: 1, sm: 1.5 },
            }}
          />
        ))}
      </Tabs>

      {/* Tab content */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        {tabConfig.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.content}
          </TabPanel>
        ))}
      </Box>
    </Stack>
  );
}

export default Perks;
