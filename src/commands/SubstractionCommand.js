export class SubstractionCommand {
    constructor(firstOperand, secondOperand) {
        this.firstOperand = parseFloat(firstOperand);
        this.secondOperand = parseFloat(secondOperand);
        this.result;
    }

    execute() {
        this.result = this.firstOperand - this.secondOperand;
        return this.result;
    }

    redo() {
        return this.result + this.secondOperand;
    }
}