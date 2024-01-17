import { getValueAsStr, setStrAsValue } from './setStrValue';
// Calculate the result of the operation and return as a string

export const getResultOfOperationAsStr = (valueStrInMemory, operatorInMemory) => {
    const currentValueNum = getValueAsNum();
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
    const resultStr = newValueNum.toString();
    setStrAsValue(resultStr);
    return resultStr;
};

// Get the current displayed value as a number
export const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
};
