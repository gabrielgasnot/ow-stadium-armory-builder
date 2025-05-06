import { useMemo } from "react";

function useBasicStatValues(
  getBasicStatAttributes,
  getSelectedItemsAttributeSum,
  getHoverPerkAttributeSum
) {
  const baseValues = useMemo(() => {
    const values = {};
    for (const [type] of getBasicStatAttributes()) {
      values[type] = getSelectedItemsAttributeSum(type);
    }
    return values;
  }, [getBasicStatAttributes, getSelectedItemsAttributeSum]);

  const hoverValues = useMemo(() => {
    const values = {};
    for (const [type] of getBasicStatAttributes()) {
      values[type] = getHoverPerkAttributeSum(type);
    }
    return values;
  }, [getBasicStatAttributes, getHoverPerkAttributeSum]);

  return { baseValues, hoverValues };
}

export default useBasicStatValues;
