const valueEl = document.querySelector('.value');

// Set a string as the displayed value with proper formatting
export const setStrAsValue = valueStr => {
    if (valueStr === 'Infinity') {
        valueEl.textContent = 'Err';
        return;
    }

    if (valueStr.length >= 11) {
        return;
    }

    if (valueStr.length >= 7) {
        valueEl.classList.add('smallValue');
    } else {
        valueEl.classList.remove('smallValue');
    }

    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    let formattedValue;

    if (decimalStr) {
        const trimmedDecimalStr = parseFloat('0.' + decimalStr)
            .toString()
            .slice(2);
        formattedValue = parseFloat(wholeNumStr + '.' + trimmedDecimalStr).toLocaleString();
    } else {
        formattedValue = parseFloat(wholeNumStr).toLocaleString();
    }

    valueEl.textContent = formattedValue;
};

// Get the current displayed value as a string
export const getValueAsStr = () => valueEl.textContent.split(',').join('');