// src/contexts/app-providers.js
import { HeroProvider } from "./hero-context";
import { BuildProvider } from "./build-context";
import { UIProvider } from "./ui-context";
import { DbProvider } from "./db-context";
import { StatsProvider } from "./stats-context";

const AppProviders = ({ children }) => {
  return (
    <DbProvider>
      <HeroProvider>
        <BuildProvider>
          <StatsProvider>
            <UIProvider>{children}</UIProvider>
          </StatsProvider>
        </BuildProvider>
      </HeroProvider>
    </DbProvider>
  );
};

export default AppProviders;
