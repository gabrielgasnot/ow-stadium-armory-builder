function getCurrentSum(attributeType, selectedItems) {
    if (!selectedItems || selectedItems.length === 0) {
        return 0;
    }
    if (!attributeType) {
        return 0;
    }

    return selectedItems.reduce((acc, item) => {
        const attributeValue = item?.attributes.reduce((sum, attribute) => {
            if (attribute.type === attributeType && !isNaN(attribute.value)) {
                return sum + parseInt(attribute.value);
            }
            return Math.abs(sum);
        }, 0);
        return acc + (attributeValue ? parseInt(attributeValue) : 0);
    }, 0);
}

export default getCurrentSum;