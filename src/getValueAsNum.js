// Get the current displayed value as a number

import {getValueAsStr} from "./getValueAsStr";

export const getValueAsNum = valueEl => {
    return parseFloat(getValueAsStr(valueEl));
};
