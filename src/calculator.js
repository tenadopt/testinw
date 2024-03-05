class Calculator {
    constructor() {
        this.command = null;
        this.history = [];
    }

    setCommand(value) {
        this.command = value;
    }

    executeCommand() {
        const result = this.command?.execute();
        if (result === Infinity) {
            this.history.push(0);
        }
        this.history.push(result);

        return result;
    }

    executeRedo() {
        const lastCommand = this.history.pop();
        if (lastCommand) {
            return this.command.redo();
        }
    }
}

export const calculator = new Calculator();
