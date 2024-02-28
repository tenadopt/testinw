export class FactorialCommand {
    constructor(firstOperand) {
        this.firstOperand = parseFloat(firstOperand);
        this.result;
    }

    execute () {
        if (this.firstOperand === 0 || this.firstOperand === 1) return 1;
        for (let i = this.firstOperand - 1; i >= 1; i--) {
            this.firstOperand *= i;
        }
        this.result = this.firstOperand;
        return this.result;
    }

    redo() {
        for (let i = 1; i <= this.result - 1; i++) {
            this.result /= i;
        }
        return this.result;
    }
}