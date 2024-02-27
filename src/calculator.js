// This module defines the calculator's state and operations
class Calculator {
    constructor() {}

    setValue(newValue) {
        this.currentValue = newValue;
    }

    getValue() {
        return this.currentValue;
    }

    add(value) {
        this.currentValue += value1 + value2;
        console.log('add:', this.currentValue);
    }

    subtract(value) {
        this.currentValue -= value;
    }

    multiply(value) {
        this.currentValue *= value;
    }

    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero');
        }
        this.currentValue /= value;
    }
}

export const calculator = new Calculator(prevValue, currentValue);
