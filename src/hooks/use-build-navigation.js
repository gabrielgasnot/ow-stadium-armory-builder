import { useCallback } from "react";
import { useBuild } from "../contexts/build-context";
import { useUI } from "../contexts/ui-context";
import { useLocation, useNavigate } from "react-router-dom";
import importBuild from "../services/import-build";

const useBuildNavigation = () => {
  const { initFromImport } = useBuild();
  const { showMessage } = useUI();

  const location = useLocation();
  const navigate = useNavigate();
  const rawPath = location.pathname;
  const encodedString = rawPath.startsWith("/") ? rawPath.slice(1) : rawPath;

  const navigation = useCallback(
    (buildId) => {
      if (buildId) {
        const result = importBuild(buildId);
        if (result) {
          try {
            initFromImport(result);

            if (location.pathname !== "/") {
              navigate("/");
            }
          } catch (e) {
            showMessage(e.message);
          }
        }
      }
    },
    [initFromImport, location.pathname, navigate, showMessage]
  );

  return { encodedString, navigation };
};

export default useBuildNavigation;
