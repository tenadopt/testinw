// Get the current displayed value as a string
export const getValueAsStr = valueEl => {
    const value = valueEl.textContent;
    if (!value) return '';
    return value;
}
