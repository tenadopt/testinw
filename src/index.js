import './styles/icons.css';

// DOM Elements
const theme = document.querySelector('.switch');
const styleLink = document.getElementById('theme');

const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');
const numberElArray = [
    number0El,
    number1El,
    number2El,
    number3El,
    number4El,
    number5El,
    number6El,
    number7El,
    number8El,
    number9El,
];

let valueStrInMemory = null;
let operatorInMemory = null;
let shouldClearDisplay = false;
let hasResult = false;
let clearDisplayAfterPercent = false;

// Get the current displayed value as a string
const getValueAsStr = () => valueEl.textContent.split(',').join('');

// Get the current displayed value as a number
const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
};

let themeStyle = 'dark';

theme.addEventListener('click', () => switchTheme());

// Swaps the stylesheet to achieve dark mode.
function switchTheme() {
    themeStyle = themeStyle === 'dark' ? 'light' : 'dark';
    theme.src = themeStyle === 'light' ? 'assets/moonIcon.svg' : 'assets/sunIcon.svg';

    fetch(`styles/${themeStyle}.css`)
        .then(response => response.text())
        .then(css => {
            const blob = new Blob([css], { type: 'text/css' });
            const url = URL.createObjectURL(blob);

            styleLink.href = url;
        });
}

// Set a string as the displayed value with proper formatting
const setStrAsValue = valueStr => {
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

    if (valueStr[valueStr.length - 1] === '.' && !valueStr.includes('.')) {
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    let formattedValue;

    if (decimalStr) {
        const trimmedDecimalStr = parseFloat('0.' + decimalStr)
            .toString()
            .slice(2);
        formattedValue = parseFloat(wholeNumStr + '.' + trimmedDecimalStr).toLocaleString('en-US');
    } else {
        formattedValue = parseFloat(wholeNumStr).toLocaleString('en-US');
    }

    valueEl.textContent = formattedValue;
    console.log(valueEl.textContent);
};

// Handle click events for number buttons
const handleNumberClick = numStr => {
    if (hasResult) {
        setStrAsValue(numStr);
        hasResult = false;
    } else if (shouldClearDisplay) {
        setStrAsValue(numStr);
        shouldClearDisplay = false;
    } else if (clearDisplayAfterPercent) {
        setStrAsValue(numStr);
        clearDisplayAfterPercent = false;
    } else {
        const currentValueStr = getValueAsStr();
        setStrAsValue(currentValueStr + numStr);
    }
};

// Calculate the result of the operation and return as a string
const getResultOfOperationAsStr = () => {
    const currentValueNum = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;

    console.log('currentValueNum:', currentValueNum);
    console.log('valueNumInMemory:', valueNumInMemory);
    console.log('operatorInMemory:', operatorInMemory);

    if (operatorInMemory === 'addition') {
        newValueNum = valueNumInMemory + currentValueNum;
    } else if (operatorInMemory === 'subtraction') {
        newValueNum = valueNumInMemory - currentValueNum;
    } else if (operatorInMemory === 'multiplication') {
        newValueNum = valueNumInMemory * currentValueNum;
    } else if (operatorInMemory === 'division') {
        newValueNum = valueNumInMemory / currentValueNum;
    }

    console.log('newValueNum:', newValueNum);

    const resultStr = newValueNum.toFixed(5).toString();
    setStrAsValue(resultStr);
    return resultStr;
};

// Handle click events for operator buttons
const handleOperatorClick = operation => {
    const currentValueStr = getValueAsStr();

    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        shouldClearDisplay = true;
    } else {
        valueStrInMemory = getResultOfOperationAsStr();
        operatorInMemory = operation;
        shouldClearDisplay = true;
    }

    hasResult = false;
    updateDisplay();
};

// Update the displayed value
const updateDisplay = () => {
    const currentValueStr = getValueAsStr();
    setStrAsValue(currentValueStr);
};

// Add Event Listeners to buttons
acEl.addEventListener('click', () => {
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;
});
pmEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const currentValueStr = getValueAsStr();

    if (currentValueStr === '-0') {
        setStrAsValue('0');
        return;
    }
    if (currentValueNum >= 0) {
        setStrAsValue('-' + currentValueStr);
    } else {
        setStrAsValue(currentValueStr.substring(1));
    }
});
percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString());
    valueStrInMemory = null;
    operatorInMemory = null;
    clearDisplayAfterPercent = true;
});

// Add event listeners to operator buttons
additionEl.addEventListener('click', () => {
    handleOperatorClick('addition');
});
subtractionEl.addEventListener('click', () => {
    handleOperatorClick('subtraction');
});
multiplicationEl.addEventListener('click', () => {
    handleOperatorClick('multiplication');
});
divisionEl.addEventListener('click', () => {
    handleOperatorClick('division');
});
equalEl.addEventListener('click', () => {
    if (valueStrInMemory) {
        const result = getResultOfOperationAsStr();
        operatorInMemory = 'equal';
        setStrAsValue(result);
        valueStrInMemory = null;
        hasResult = true;
    }
});

// Add Event Listeners to number and decimal buttons
for (let i = 0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    });
}
decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    if (!currentValueStr.includes('.')) {
        setStrAsValue(currentValueStr + '.');
    }
});
