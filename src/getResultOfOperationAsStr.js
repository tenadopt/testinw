import { getValueAsNum } from './getValueAsNum';
import { setStrAsValue } from './setStrAsValue';
import { getValueAsStr } from './getValueAsStr';
import { AdditionCommand } from './operations';
import { calculator } from './calculator';
import { Invoker } from './invoker';

// Calculate the result of the operation and return as a string
export const getResultOfOperationAsStr = (valueEl, valueStrInMemory, operatorInMemory) => {
    // Convert the input string values to numbers for calculation

    const memoryValue = parseFloat(valueStrInMemory);
    const currentValue = valueEl;

    // let command;
    let result;
    // let invoker = new Invoker();

    // Determine which operation to perform based on the operator
    switch (operatorInMemory) {
        case 'addition':
            // Create and execute an AdditionCommand
            calculator.add(memoryValue, currentValue);
            result = calculator.getValue(); // Get the result from the calculator
            break;
        // Add cases for other operations like subtraction, multiplication, etc.
        default:
            // Handle default case or unknown operator
            result = currentValue; // No operation means the current value remains unchanged
    }
    // } else if (operatorInMemory === 'subtraction') {
    //     newValueNum = valueNumInMemory - currentValueNum;
    // } else if (operatorInMemory === 'multiplication') {
    //     newValueNum = valueNumInMemory * currentValueNum;
    // } else if (operatorInMemory === 'division') {
    //     newValueNum = valueNumInMemory / currentValueNum;
    // }

    const resultStr = result.toFixed(5).toString();
    setStrAsValue(valueEl, resultStr);
    return resultStr;
};
