import { calculator } from '../calculator';
import { MathRootCommand } from '../commands/MathRootCommand';
import { ExponentionCommand } from '../commands/ExponentionCommand';
import { FactorialCommand } from '../commands/FactorialCommand';
import { PercentCommand } from '../commands/PercentCommand';
import { ChangeSignCommand } from '../commands/ChangeSignCommand/ChangeSignCommand';
import { Actions } from '../constants/constants';
import { OneDivXCommand } from '../commands/OneDivXCommand';

// Calculate the result of the operation and return as a string
export const getResultWithOneOperand = (value, action) => {
    switch (action) {
        case Actions.Squarex:
            calculator.setCommand(new ExponentionCommand(value, 2));

            return calculator.executeCommand();
        case Actions.Squarerootx:
            calculator.setCommand(new MathRootCommand(value, 2));

            return calculator.executeCommand();
        case Actions.Cubex:
            calculator.setCommand(new ExponentionCommand(value, 3));

            return calculator.executeCommand();
        case Actions.Cuberootx:
            calculator.setCommand(new MathRootCommand(value, 3));

            return calculator.executeCommand();
        case Actions.Tenx:
            calculator.setCommand(new ExponentionCommand(10, value));

            return calculator.executeCommand();
        case Actions.Xfactorial:
            calculator.setCommand(new FactorialCommand(value));

            return calculator.executeCommand();
        case Actions.Percent:
            calculator.setCommand(new PercentCommand(value));

            return calculator.executeCommand();
        case Actions.Onedivx:
            calculator.setCommand(new OneDivXCommand(value));

            return calculator.executeCommand();
        case Actions.Pm:
            calculator.setCommand(new ChangeSignCommand(value));

            return calculator.executeCommand();
        default:
            return null;
    }
};
