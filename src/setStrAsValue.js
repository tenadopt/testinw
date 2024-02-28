// Set a string as the displayed value with proper formatting
export const setStrAsValue = (valueEl, valueStr) => {

    if (!valueStr) return;
    if (valueStr === 'Infinity') {
        valueEl.textContent = 'Err';
        return;
    }

    if (valueStr.length >= 17) {
        return;
    }

    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.toString().split('.');
    let formattedValue;

    if (decimalStr) {
        const trimmedDecimalStr = parseFloat('0.' + decimalStr)
            .toString()
            .slice(2);
        formattedValue = parseFloat(wholeNumStr + '.' + trimmedDecimalStr).toString();
    } else {
        formattedValue = parseFloat(wholeNumStr).toString();
    }

    return valueEl.textContent = formattedValue;
};
