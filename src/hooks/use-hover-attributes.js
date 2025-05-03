import { useUI } from "../contexts/ui-context";

export const useHoverAttributes = () => {
  const { hoverAttributes } = useUI();

  const checkHoverAttributes = (perkAttributes) => {
    return perkAttributes.some((attr) =>
      hoverAttributes.some((hoverAttr) => hoverAttr === attr.type)
    );
  };

  const hasHoverAttributes = hoverAttributes && hoverAttributes.length > 0;

  return { checkHoverAttributes, hasHoverAttributes };
};
