export class OneDivXCommand {
    constructor(value) {
        this.value = value;
    }

    execute() {
        this.result = 1 / this.value;

        return this.result;
    }

    redo() {
        return this.value;
    }
}
