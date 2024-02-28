import './styles/icons.css';
import {switchTheme} from './switchTheme';
import {getValueAsStr} from './getValueAsStr';
import {getValueAsNum} from './getValueAsNum';
import {setStrAsValue} from './setStrAsValue';
import {getResultOfOperationAsStr} from './getResultOfOperationAsStr';

// DOM Elements
const theme = document.querySelector('.switch');
const styleLink = document.getElementById('theme');

export const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const sqxEl = document.querySelector('.squarex');
const sqrxEl = document.querySelector('.squarerootx');

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


// Handle click events for number buttons
const handleNumberClick = numStr => {
    if (hasResult) {
        setStrAsValue(valueEl, numStr);
        hasResult = false;
    } else if (shouldClearDisplay) {
        setStrAsValue(valueEl, numStr);
        shouldClearDisplay = false;
    } else if (clearDisplayAfterPercent) {
        setStrAsValue(valueEl, numStr);
        clearDisplayAfterPercent = false;
    } else {
        const currentValueStr = getValueAsStr(valueEl);
        setStrAsValue(valueEl, currentValueStr + numStr);
    }
};

// Handle click events for operator buttons
const handleOperatorClick = operation => {
    const currentValueStr = getValueAsStr(valueEl);

    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        shouldClearDisplay = true;
    } else {
        valueStrInMemory = getResultOfOperationAsStr(valueEl, valueStrInMemory, operatorInMemory);
        operatorInMemory = operation;
        shouldClearDisplay = true;
    }

    hasResult = false;
    updateDisplay();
};

// Update the displayed value
export const updateDisplay = () => {
    const currentValueStr = getValueAsStr(valueEl);
    setStrAsValue(valueEl, currentValueStr);
};

// Add Event Listeners to switch the theme
theme.addEventListener('click', () => switchTheme(theme, styleLink));

// Add Event Listeners to buttons
acEl.addEventListener('click', () => {
    setStrAsValue(valueEl, '0');
    valueStrInMemory = null;
    operatorInMemory = null;
});
pmEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum(valueEl);
    const currentValueStr = getValueAsStr(valueEl);

    if (currentValueStr === '-0') {
        setStrAsValue(valueEl, '0');
        return;
    }
    if (currentValueNum >= 0) {
        setStrAsValue(valueEl, '-' + currentValueStr);
    } else {
        setStrAsValue(valueEl, currentValueStr.substring(1));
    }
});
percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum(valueEl);
    const newValueNum = currentValueNum / 100;
    setStrAsValue(valueEl, newValueNum.toString());
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

sqxEl.addEventListener('click', () => {
    handleOperatorClick('sqx');
})

sqrxEl.addEventListener('click', () => {
    handleOperatorClick('sqrx')
})

equalEl.addEventListener('click', () => {
    if (valueStrInMemory) {
        const result = getResultOfOperationAsStr(valueEl, valueStrInMemory, operatorInMemory);
        operatorInMemory = 'equal';
        setStrAsValue(valueEl, result);
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
    const currentValueStr = getValueAsStr(valueEl);
    if (!currentValueStr.includes('.')) {
        setStrAsValue(valueEl, currentValueStr + '.');
    }
});
