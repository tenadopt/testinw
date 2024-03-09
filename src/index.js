import './styles/icons.css';
import { switchTheme } from './helpers/switchTheme';
import { getResultWithOneOperand } from './helpers/getResultWithOneOperand';
import { getResultSimpleOperations } from './helpers/getResultSimpleOperations';
import { parseValue } from './helpers/parseValue';
import { handleMemoryClick } from './helpers/handleMemoryClick';
import { Actions, actionsWithMemory, actionsWithOneOperand } from './constants/constants';

// DOM Elements
const theme = document.querySelector('.switch');
const styleLink = document.getElementById('theme');

export const inputEl = document.querySelector('.value');

const acEl = document.getElementById('ac');
const decimalEl = document.getElementById('decimal');

let valuesArr = [];
let actionsArr = [];
let displayValue = '0';
let shouldDisplayValueUpdate = false;
let memoryParam = 0;

export const updateDisplay = value => {
    inputEl.textContent = value;
};

// inputEl.textContent = displayValue;

const reset = () => {
    valuesArr = [];
    actionsArr = [];
    displayValue = '0';
    updateDisplay(displayValue);
};

const convertToDecimal = () => {
    if (!(isNaN(displayValue) || displayValue.includes('.'))) {
        displayValue = `${displayValue}.`;
        updateDisplay(displayValue);
    }
};

//@params value=number
const toDisplayValue = value => {
    //какая-то логика по проверке и переприсвоению строкового значения
    if (displayValue === '0' || (displayValue === '' && value !== 0) || shouldDisplayValueUpdate) {
        displayValue = value.toString();
        shouldDisplayValueUpdate = false;
    } else {
        displayValue = `${displayValue}${value}`;
    }

    updateDisplay(displayValue);
};

// Handle click events for number buttons
const handleNumberClick = num => {
    if (shouldDisplayValueUpdate) {
        displayValue = '0';
    }

    toDisplayValue(num);
};
//@params value = number
const setValue = value => {
    //обработка массива
    if (!valuesArr.length || valuesArr.length === 1) {
        valuesArr.push(value);
    } else {
        valuesArr = [valuesArr[valuesArr.length - 1], value];
    }
};
//@params value = string
const setAction = action => {
    //обработка массива
    if (!actionsArr.length || actionsArr.length === 1) {
        actionsArr.push(action);
    } else {
        actionsArr = [actionsArr[actionsArr.length - 1], action];
    }
};

// Handle click events for operator buttons
const handleOperatorClick = action => {
    // присваивание экшена в массив
    // калькуляция
    // внутри калькуляции проверка на количество операторов и экшенов
    // shouldDisplayValueUpdate = true
    shouldDisplayValueUpdate = true;
    // присвоение значения в массив values
    setValue(parseValue(displayValue));
    // присвоение action в массив actionArr
    setAction(action);

    // логика для 1 value & 1 action
    /** region здесь логика которая должна быть в другой функции */
    if (valuesArr.length === 1 && actionsArr.length === 1) {
        if (actionsWithMemory.includes(actionsArr[0])) {
            memoryParam = handleMemoryClick(valuesArr[0], memoryParam, actionsArr[0]);

            if (memoryParam !== 0) {
                valuesArr = [memoryParam];
            } else valuesArr = [];

            if (actionsArr[0] === Actions.Mr) {
                updateDisplay(memoryParam);
            }

            actionsArr = [];
        } else {
            //some logic
            const res = getResultWithOneOperand(valuesArr[0], actionsArr[0]);

            if (res !== null) {
                valuesArr = [];
                actionsArr = [];
                displayValue = res.toString();
                updateDisplay(displayValue);
            }
        }
    }

    if (valuesArr.length === 2 && actionsArr.length === 2) {
        if (actionsArr[1] === 'equal') {
            //some logic + - / *
            const res = getResultSimpleOperations(valuesArr, actionsArr);

            valuesArr = [];
            actionsArr = [];
            displayValue = res.toString();
            updateDisplay(displayValue);
        } else {
            let res = getResultSimpleOperations(valuesArr, actionsArr);

            if (actionsWithOneOperand.includes(actionsArr[1])) {
                res = getResultWithOneOperand(res, actionsArr[1]);
                valuesArr = [];
                actionsArr = [];
            } else if (actionsWithMemory.includes(actionsArr[1])) {
                res = handleMemoryClick(res, memoryParam, actionsArr[1]);
                memoryParam = res;
                updateDisplay(res);
                valuesArr = [memoryParam];
                actionsArr = [];
                //logic
            } else {
                valuesArr = [valuesArr[1], res];
                actionsArr = [actionsArr[1]];
            }

            displayValue = res.toString();
            updateDisplay(displayValue);
        }
    }
    /** endregion здесь логика которая должна быть в другой функции */
};

// Update the displayed value

// Add Event Listeners to switch the theme
theme.addEventListener('click', () => switchTheme(theme, styleLink));

// Add Event Listeners to buttons
acEl.addEventListener('click', reset);

document.querySelectorAll('.input').forEach((numberEl, index) => {
    numberEl.addEventListener('click', () => {
        handleNumberClick(index + 1);
    });
});

decimalEl.addEventListener('click', () => {
    convertToDecimal();
});

document.querySelectorAll('.operation').forEach(operationEl => {
    operationEl.addEventListener('click', () => {
        if (Object.values(Actions).includes(operationEl.id)) {
            handleOperatorClick(operationEl.id);
        }
    });
});
