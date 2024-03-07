export class MemoryReadCommand {
    constructor(operand, memoryParam) {
        this.operand = operand;
        this.memoryParam = memoryParam;
    }

    execute() {
        return this.memoryParam;
    }

    redo() {
        this.memoryParam = this.operand;

        return this.memoryParam;
    }
}
