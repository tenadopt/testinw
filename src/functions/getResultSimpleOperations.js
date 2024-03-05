import { actions } from '../index';
import { calculator } from '../calculator';
import { PlusCommand } from '../commands/PlusCommand';
import { SubstractionCommand } from '../commands/SubstractionCommand';
import { MultiplicationCommand } from '../commands/MultiplicationCommand';
import { DivisionCommand } from '../commands/DivisionCommand';
import { ExponentionCommand } from '../commands/ExponentionCommand';
import { MathRootCommand } from '../commands/MathRootCommand';

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
