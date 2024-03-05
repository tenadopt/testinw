import { calculator } from '../calculator';
import { MathRootCommand } from '../commands/MathRootCommand';
import { ExponentionCommand } from '../commands/ExponentionCommand';
import { FactorialCommand } from '../commands/FactorialCommand';
import { PercentCommand } from '../commands/PercentCommand';
import { ChangeSignCommand } from '../commands/ChangeSignCommand';
import { actions } from '../index';
import { OneDivXCommand } from '../commands/OneDivXCommand';
import { MemoryPlusCommand } from '../commands/MemoryPlusCommand';

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
        case actions.mplus:
            calculator.setCommand(new MemoryPlusCommand(value));
            return calculator.executeCommand();
        default:
            return null;
    }
};
