export const parseValue = value => {
    const floatValue = parseFloat(value);

    if (Math.trunc(floatValue) === floatValue) {
        return parseInt(value);
    }

    return floatValue;
};
