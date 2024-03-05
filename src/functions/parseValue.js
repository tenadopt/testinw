export const parseValue = value => {
    let floatValue = parseFloat(value);
    if (Math.trunc(floatValue) === floatValue) {
        return parseInt(value);
    }
    return floatValue;
};
