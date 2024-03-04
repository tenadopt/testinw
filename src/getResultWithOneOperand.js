import { calculator } from './calculator';
import { PlusCommand } from './commands/PlusCommand';
import { SubstractionCommand } from './commands/SubstractionCommand';
import { MultiplicationCommand } from './commands/MultiplicationCommand';
import { DivisionCommand } from './commands/DivisionCommand';
import { MathRootCommand } from './commands/MathRootCommand';
import { ExponentionCommand } from './commands/ExponentionCommand';
import { FactorialCommand } from './commands/FactorialCommand';
import { PercentCommand } from './commands/PercentCommand';
import { ChangeSignCommand } from './commands/ChangeSignCommand';
import { actions } from './index';
import { OneDivXCommand } from './commands/OneDivXCommand';

// Calculate the result of the simple operations and return as a string
export const getResultSimpleOperations = (valuesArr, actionsArr) => {
    const currentAction = actionsArr[0];
    const currentValue = valuesArr[1];
    const prevValue = valuesArr[0];

    switch (currentAction) {
        case actions.plus:
            calculator.setCommand(new PlusCommand(prevValue, currentValue));
            return calculator.executeCommand();
        case actions.minus:
            calculator.setCommand(new SubstractionCommand(prevValue, currentValue));
            return calculator.executeCommand();
        case actions.multiply:
            calculator.setCommand(new MultiplicationCommand(prevValue, currentValue));
            return calculator.executeCommand();
        case actions.divide:
            calculator.setCommand(new DivisionCommand(prevValue, currentValue));
            return calculator.executeCommand();
        case actions.xdegreey:
            calculator.setCommand(new ExponentionCommand(prevValue, currentValue));
            return calculator.executeCommand();
        case actions.xrooty:
            calculator.setCommand(new MathRootCommand(prevValue, currentValue));
            return calculator.executeCommand();
    }
};

// Calculate the result of the operation and return as a string
export const getResultWithOneOperand = (value, action) => {
    switch (action) {
        case actions.squarex:
            calculator.setCommand(new ExponentionCommand(value, 2));
            return calculator.executeCommand();
        case actions.squarerootx:
            calculator.setCommand(new MathRootCommand(value, 2));
            return calculator.executeCommand();
        case actions.cubex:
            calculator.setCommand(new ExponentionCommand(value, 3));
            return calculator.executeCommand();
        case actions.cuberootx:
            calculator.setCommand(new MathRootCommand(value, 3));
            return calculator.executeCommand();
        case actions.tenx:
            calculator.setCommand(new ExponentionCommand(10, value));
            return calculator.executeCommand();
        case actions.xfactorial:
            calculator.setCommand(new FactorialCommand(value));
            return calculator.executeCommand();
        case actions.percent:
            calculator.setCommand(new PercentCommand(value));
            return calculator.executeCommand();
        case actions.onedivx:
            calculator.setCommand(new OneDivXCommand(value));
            return calculator.executeCommand();
        case actions.pm:
            calculator.setCommand(new ChangeSignCommand(value));
            return calculator.executeCommand();
        default:
            return null;
    }

    // console.log('newValueNum', newValueNum)
    //
    // const resultStr = newValueNum?.toFixed(5).toString();
    // setStrAsValue(valueEl, resultStr);
    // console.log('resultStr', resultStr)
    // return resultStr;
};
