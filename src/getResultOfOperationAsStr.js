import { getValueAsNum } from './getValueAsNum';
import { setStrAsValue } from './setStrAsValue';

// Calculate the result of the operation and return as a string
export const getResultOfOperationAsStr = (valueEl, valueStrInMemory, operatorInMemory) => {
    const currentValueNum = getValueAsNum(valueEl);
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;

    if (operatorInMemory === 'addition') {
        newValueNum = valueNumInMemory + currentValueNum;
    } else if (operatorInMemory === 'subtraction') {
        newValueNum = valueNumInMemory - currentValueNum;
    } else if (operatorInMemory === 'multiplication') {
        newValueNum = valueNumInMemory * currentValueNum;
    } else if (operatorInMemory === 'division') {
        newValueNum = valueNumInMemory / currentValueNum;
    }

    const resultStr = newValueNum.toFixed(5).toString();
    setStrAsValue(valueEl, resultStr);
    return resultStr;
};
