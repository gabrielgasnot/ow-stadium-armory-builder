import React, { useContext } from "react";
import { Stack, Box, Tabs, Tab } from "@mui/material";
import Powers from "./powers.js";
import GroupItems from "./group-items.js";
import AppContext from "../app-context.js";

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

function Perks() {
  const { heroPowers, basicItems, heroItems } = useContext(AppContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  if (!heroPowers && !heroItems && !basicItems) {
    return "No perk available for this hero";
  }

  // 👇 Centralized tab definition
  const tabConfig = [
    {
      label: "Weapon",
      content: <GroupItems category="Weapon" />,
    },
    {
      label: "Ability",
      content: <GroupItems category="Ability" />,
    },
    {
      label: "Survival",
      content: <GroupItems category="Survival" />,
    },
    {
      label: "Powers",
      content: <Powers />,
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
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: (theme) => theme.palette.custom.orange, // Custom indicator color using theme's primary color
          },
        }}
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
              transition: "all 0.3s ease", // Smooth transition for all styles
              "&:hover": {
                color: "white", // Make text white on hover
                textShadow: "0 0 10px rgba(249, 158, 26, 0.7)", // Subtle glow on hover
              },
              "&.Mui-selected": {
                color: "white", // Text color when selected
              },
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
