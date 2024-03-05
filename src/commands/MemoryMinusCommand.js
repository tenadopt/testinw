export class MemoryMinusCommand {
    constructor(operand, memoryParam) {
        this.operand = operand;
        this.memoryParam = memoryParam;
    }

    execute() {
        this.result = this.memoryParam - this.operand;
        return this.result;
    }

    redo() {
        this.result = this.memoryParam + this.operand;
        return this.result;
    }
}
