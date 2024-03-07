export class PercentCommand {
    constructor(value) {
        this.value = value;
    }

    execute() {
        this.result = this.value / 100;

        return this.result;
    }

    redo() {
        return this.result * 100;
    }
}
