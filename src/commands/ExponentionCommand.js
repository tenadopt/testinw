export class ExponentionCommand {
    constructor(firstOperand, power) {
        this.firstOperand = parseFloat(firstOperand);
        this.power = parseFloat(power);
        this.result;
    }

    execute() {
        this.result = Math.pow(this.firstOperand, this.power);
        return this.result;
    }

    redo() {
        return Math.pow(this.result, 1 / this.power);
    }
}
