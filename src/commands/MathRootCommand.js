export class MathRootCommand {
    constructor(firstOperand, secondOperand) {
        this.firstOperand = parseFloat(firstOperand);
        this.secondOperand = parseFloat(secondOperand);
    }

    execute() {
        this.result = Math.pow(this.firstOperand, 1 / this.secondOperand);

        return this.result;
    }

    redo() {
        return Math.pow(this.result, this.secondOperand);
    }
}
