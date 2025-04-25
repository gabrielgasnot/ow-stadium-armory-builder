import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Powers from "./powers.js";
import GroupItems from "./group-items.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Perks(props) {
  const [value, setValue] = React.useState(0);
  const { powers, generalItems, items, selectPerk, getPerkColor } = props;

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  if (!powers || !items || !generalItems) {
    return "Select a hero.";
  }

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Weapon" />
        <Tab label="Ability" />
        <Tab label="Survival" />
        <Tab label="Powers" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <GroupItems
          basicItems={generalItems}
          items={items}
          category="Weapon"
          selectItem={selectPerk}
          getColor={getPerkColor}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GroupItems
          basicItems={generalItems}
          items={items ?? []}
          category="Ability"
          selectItem={selectPerk}
          getColor={getPerkColor}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GroupItems
          basicItems={generalItems}
          items={items ?? []}
          category="Survival"
          selectItem={selectPerk}
          getColor={getPerkColor}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Powers powers={powers} selectPower={selectPerk} />
      </TabPanel>
    </Box>
  );
}

export default Perks;
