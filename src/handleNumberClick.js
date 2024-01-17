import { getValueAsStr, setStrAsValue } from './setStrValue';

// Handle click events for number buttons
export const handleNumberClick = (
    numStr,
    hasResult,
    shouldClearDisplay,
    clearDisplayAfterPercent,
) => {
    let updatedHasResult = hasResult;
    let updatedShouldClearDisplay = shouldClearDisplay;
    let updatedClearDisplayAfterPercent = clearDisplayAfterPercent;

    if (hasResult) {
        setStrAsValue(numStr);
        updatedHasResult = false;
    } else if (shouldClearDisplay) {
        setStrAsValue(numStr);
        updatedShouldClearDisplay = false;
    } else if (clearDisplayAfterPercent) {
        setStrAsValue(numStr);
        updatedClearDisplayAfterPercent = false;
    } else {
        const currentValueStr = getValueAsStr();
        setStrAsValue(currentValueStr + numStr);
    }

    return {
        hasResult: updatedHasResult,
        shouldClearDisplay: updatedShouldClearDisplay,
        clearDisplayAfterPercent: updatedClearDisplayAfterPercent,
    };
};
