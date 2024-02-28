import {getValueAsNum} from './getValueAsNum';
import {setStrAsValue} from './setStrAsValue';
import {calculator} from "./calculator";
import {PlusCommand} from "./commands/PlusCommand";
import {SubstractionCommand} from "./commands/SubstractionCommand"
import {MultiplicationCommand} from "./commands/MultiplicationCommand";
import {DivisionCommand} from "./commands/DivisionCommand";

// Calculate the result of the operation and return as a string
export const getResultOfOperationAsStr = (valueEl, valueStrInMemory, operatorInMemory) => {
    const currentValueNum = getValueAsNum(valueEl);
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;

    if (operatorInMemory === 'addition') {
        // newValueNum = valueNumInMemory + currentValueNum;
        calculator.setCommand(new PlusCommand(valueNumInMemory, currentValueNum));
        calculator.executeCommand();
    } else if (operatorInMemory === 'subtraction') {
        // newValueNum = valueNumInMemory - currentValueNum;
        calculator.setCommand(new SubstractionCommand(valueNumInMemory, currentValueNum));
        calculator.executeCommand();
    } else if (operatorInMemory === 'multiplication') {
        // newValueNum = valueNumInMemory * currentValueNum;
        calculator.setCommand(new MultiplicationCommand(valueNumInMemory, currentValueNum));
        calculator.executeCommand();
    } else if (operatorInMemory === 'division') {
        // newValueNum = valueNumInMemory / currentValueNum;
        calculator.setCommand(new DivisionCommand(valueStrInMemory, currentValueNum));
        calculator.executeCommand();
    }

    const resultStr = newValueNum?.toFixed(5).toString();
    setStrAsValue(valueEl, resultStr);
    return resultStr;
};
