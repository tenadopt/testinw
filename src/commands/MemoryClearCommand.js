export class MemoryClearCommand {
    constructor(operand) {
        this.operand = operand;
    }

    execute() {
        this.result = 0;

        return this.result;
    }

    redo() {
        return this.operand;
    }
}
