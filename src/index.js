import './styles/icons.css';
import { switchTheme } from './functions/switchTheme';
import { getResultWithOneOperand } from './functions/getResultWithOneOperand';
import { getResultSimpleOperations } from './functions/getResultSimpleOperations';
import { parseValue } from './functions/parseValue';
import { handleMemoryClick } from './functions/handleMemoryClick';

export const actions = {
    plus: 'addition',
    minus: 'subtraction',
    divide: 'division',
    multiply: 'multiplication',
    percent: 'percent',
    squarex: 'squarex',
    squarerootx: 'squarerootx',
    cubex: 'cubex',
    tenx: 'tenx',
    cuberootx: 'cuberootx',
    xdegreey: 'xdegreey',
    onedivx: 'onedivx',
    xfactorial: 'xfactorial',
    xrooty: 'xrooty',
    equal: 'equal',
    pm: 'pm',
    mplus: 'mplus',
    mminus: 'mminus',
    mr: 'mr',
    mc: 'mc',
};

export const actionsWithOneOperand = [
    actions.squarex,
    actions.squarerootx,
    actions.cubex,
    actions.cuberootx,
    actions.tenx,
    actions.onedivx,
    actions.percent,
    actions.xfactorial,
    actions.pm,
];

export const actionsWithMemory = [actions.mplus, actions.mminus, actions.mr, actions.mc];

// DOM Elements
const theme = document.querySelector('.switch');
const styleLink = document.getElementById('theme');

export const inputEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('#pm');
const percentEl = document.querySelector('#percent');

const additionEl = document.getElementById('plus');

const subtractionEl = document.getElementById('subtraction');
const multiplicationEl = document.getElementById('multiplication');
const divisionEl = document.getElementById('division');
const sqxEl = document.getElementById('squarex');
const sqrxEl = document.getElementById('squarerootx');
const cubexEl = document.getElementById('cubex');
const cuberxEl = document.getElementById('cuberootx');
const tenxEl = document.getElementById('tenx');
const xdegreeyEl = document.getElementById('xdegreey');
const onedivxEl = document.getElementById('onedivx');
const xfactorialEl = document.getElementById('xfactorial');
const xrootyEl = document.getElementById('xrooty');
const mplusEl = document.getElementById('mplus');
const mminusEl = document.getElementById('mminus');
const mcEl = document.getElementById('mc');
const mrEl = document.getElementById('mr');

const equalEl = document.querySelector('#equal');

const decimalEl = document.querySelector('#decimal');
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
            if (actionsArr[0] === actions.mr) {
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
pmEl.addEventListener('click', () => {
    handleOperatorClick(actions.pm);
});
percentEl.addEventListener('click', () => handleOperatorClick(actions.percent));

// Add event listeners to operator buttons
additionEl.addEventListener('click', () => handleOperatorClick(actions.plus));

subtractionEl.addEventListener('click', () => {
    handleOperatorClick(actions.minus);
});
multiplicationEl.addEventListener('click', () => {
    handleOperatorClick(actions.multiply);
});
divisionEl.addEventListener('click', () => {
    handleOperatorClick(actions.divide);
});

sqxEl.addEventListener('click', () => {
    handleOperatorClick(actions.squarex);
});

sqrxEl.addEventListener('click', () => {
    handleOperatorClick(actions.squarerootx);
});
cubexEl.addEventListener('click', () => {
    handleOperatorClick(actions.cubex);
});
cuberxEl.addEventListener('click', () => {
    handleOperatorClick(actions.cuberootx);
});
tenxEl.addEventListener('click', () => {
    handleOperatorClick(actions.tenx);
});
onedivxEl.addEventListener('click', () => {
    handleOperatorClick(actions.onedivx);
});
xdegreeyEl.addEventListener('click', () => {
    handleOperatorClick(actions.xdegreey);
});
xrootyEl.addEventListener('click', () => {
    handleOperatorClick(actions.xrooty);
});
xfactorialEl.addEventListener('click', () => {
    handleOperatorClick(actions.xfactorial);
});
mplusEl.addEventListener('click', () => {
    handleOperatorClick(actions.mplus);
});
mminusEl.addEventListener('click', () => {
    handleOperatorClick(actions.mminus);
});
mrEl.addEventListener('click', () => {
    handleOperatorClick(actions.mr);
});
mcEl.addEventListener('click', () => {
    handleOperatorClick(actions.mc);
});

equalEl.addEventListener('click', () => {
    handleOperatorClick(actions.equal);
});

numberElArray.forEach((numberEl, index) => {
    numberEl.addEventListener('click', () => {
        handleNumberClick(index);
    });
});
decimalEl.addEventListener('click', () => {
    convertToDecimal();
});
