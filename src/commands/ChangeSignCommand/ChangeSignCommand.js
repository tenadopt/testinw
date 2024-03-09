export class ChangeSignCommand {
    constructor(operand) {
        this.operand = parseFloat(operand);
    }

    execute() {
        this.result = this.operand * -1;

        return this.result;
    }

    redo() {
        return this.result * -1;
    }
}
