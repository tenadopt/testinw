// Get the current displayed value as a number

import { getValueAsStr } from './getValueAsStr';

export const getValueAsNum = valueEl => {
    console.log('/////////////////');
    console.log('getValueAsNum valueEl', getValueAsStr(valueEl));
    return parseFloat(getValueAsStr(valueEl));
};
