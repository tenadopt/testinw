import './styles/icons.css';
import { switchTheme } from './switchTheme';
import { getValueAsStr, setStrAsValue } from './setStrValue';
import { handleNumberClick } from './handleNumberClick';
import { getResultOfOperationAsStr, getValueAsNum } from './getResultOfOperationAsStr';

// DOM Elements
const theme = document.querySelector('.switch');
const styleLink = document.getElementById('theme');

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
let hasResult = false;
let shouldClearDisplay = false;
let clearDisplayAfterPercent = false;

const handleOperatorClick = operation => {
    hasResult = false;

    const currentValueStr = getValueAsStr();
    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        shouldClearDisplay = true;
    } else {
        valueStrInMemory = getResultOfOperationAsStr(valueStrInMemory, operatorInMemory);
        operatorInMemory = operation;
        shouldClearDisplay = true;
    }
    updateDisplay();
};

// Update the displayed value
const updateDisplay = () => {
    const currentValueStr = getValueAsStr();
    setStrAsValue(currentValueStr);
};

//theme switch
theme.addEventListener('click', () => switchTheme(theme, styleLink));

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
    handleOperatorClick(
        'addition',
        hasResult,
        valueStrInMemory,
        operatorInMemory,
        shouldClearDisplay,
    );
});
subtractionEl.addEventListener('click', () => {
    handleOperatorClick(
        'subtraction',
        hasResult,
        valueStrInMemory,
        operatorInMemory,
        shouldClearDisplay,
    );
});
multiplicationEl.addEventListener('click', () => {
    handleOperatorClick(
        'multiplication',
        hasResult,
        valueStrInMemory,
        operatorInMemory,
        shouldClearDisplay,
    );
});
divisionEl.addEventListener('click', () => {
    handleOperatorClick(
        'division',
        hasResult,
        valueStrInMemory,
        operatorInMemory,
        shouldClearDisplay,
    );
});
equalEl.addEventListener('click', () => {
    if (valueStrInMemory) {
        const result = getResultOfOperationAsStr(valueStrInMemory, operatorInMemory);
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
        handleNumberClick(i.toString(), hasResult, shouldClearDisplay, clearDisplayAfterPercent);
    });
}
decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    if (!currentValueStr.includes('.')) {
        setStrAsValue(currentValueStr + '.');
    }
});
