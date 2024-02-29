import { getValueAsNum } from './getValueAsNum';
import { calculator } from './calculator';
import { PlusCommand } from './commands/PlusCommand';
import { SubstractionCommand } from './commands/SubstractionCommand';
import { MultiplicationCommand } from './commands/MultiplicationCommand';
import { DivisionCommand } from './commands/DivisionCommand';
import { MathRootCommand } from './commands/MathRootCommand';
import { ExponentionCommand } from './commands/ExponentionCommand';
import { FactorialCommand } from './commands/FactorialCommand';

// Calculate the result of the operation and return as a string
export const getResultOfOperationAsStr = (valueEl, valueStrInMemory, operatorInMemory) => {
    const currentValueNum = getValueAsNum(valueEl);
    const valueNumInMemory = parseFloat(valueStrInMemory);

    console.log('operatorInMemory', operatorInMemory);

    switch (operatorInMemory) {
        case 'addition':
            return (
                calculator.setCommand(new PlusCommand(valueNumInMemory, currentValueNum)),
                calculator.executeCommand()
            );
        case 'subtraction':
            return (
                calculator.setCommand(new SubstractionCommand(valueNumInMemory, currentValueNum)),
                calculator.executeCommand()
            );
        case 'multiplication':
            return (
                calculator.setCommand(new MultiplicationCommand(valueNumInMemory, currentValueNum)),
                calculator.executeCommand()
            );
        case 'division':
            return (
                calculator.setCommand(new DivisionCommand(valueNumInMemory, currentValueNum)),
                calculator.executeCommand()
            );
        case 'squarex':
            console.log('inside squarex');
            console.log('valueNumInMemory', valueNumInMemory);
            console.log('currentValue', currentValueNum);
            debugger;
            return (
                calculator.setCommand(new ExponentionCommand(valueNumInMemory, 2)),
                calculator.executeCommand()
            );
        case 'squarerootx':
            return (
                calculator.setCommand(new MathRootCommand(valueNumInMemory, 2)),
                calculator.executeCommand()
            );
        case 'cubex':
            return (
                calculator.setCommand(new ExponentionCommand(valueNumInMemory, 3)),
                calculator.executeCommand()
            );
        case 'cuberootx':
            return (
                calculator.setCommand(new MathRootCommand(valueNumInMemory, 3)),
                calculator.executeCommand()
            );

        case 'tenx':
            return (
                calculator.setCommand(new ExponentionCommand(10, valueNumInMemory)),
                calculator.executeCommand()
            );
        case 'onedivx':
            return (
                calculator.setCommand(new DivisionCommand(1, valueNumInMemory)),
                calculator.executeCommand()
            );
        case 'xdegreey':
            return (
                calculator.setCommand(new ExponentionCommand(valueNumInMemory, currentValueNum)),
                calculator.executeCommand()
            );
        case 'xrooty':
            return (
                calculator.setCommand(new MathRootCommand(valueNumInMemory, currentValueNum)),
                calculator.executeCommand()
            );

        case 'xfactorial':
            return (
                calculator.setCommand(new FactorialCommand(valueNumInMemory)),
                calculator.executeCommand()
            );
    }

    // console.log('newValueNum', newValueNum)
    //
    // const resultStr = newValueNum?.toFixed(5).toString();
    // setStrAsValue(valueEl, resultStr);
    // console.log('resultStr', resultStr)
    // return resultStr;
};
