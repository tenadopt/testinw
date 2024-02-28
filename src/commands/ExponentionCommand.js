export class ExponentionCommand {
    constructor(firstOperand, secondOperator) {
        this.firstOperand = parseFloat(firstOperand);
        this.secondOperator = parseFloat(secondOperator);
        this.result;
    }

    execute() {
        this.result = Math.pow(this.firstOperand, this.secondOperator);
        return this.result;
    }

    redo() {
        return Math.pow(this.result, 1 / this.secondOperator);
    }
}