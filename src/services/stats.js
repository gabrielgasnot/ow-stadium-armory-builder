function getCurrentSum(attributeType, selectedItems) {
    return selectedItems.reduce((acc, item) => {
        const attributeValue = item.attributes.reduce((sum, attribute) => {
            if (attribute.type === attributeType && !isNaN(attribute.value)) {
                return sum + parseInt(attribute.value);
            }
            return Math.abs(sum);
        }, 0);
        return acc + (attributeValue ? parseInt(attributeValue) : 0);
    }, 0);
}

export default getCurrentSum;