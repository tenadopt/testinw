// Command interface
export class Command {
    execute() {
        throw new Error('This method should be overridden');
    }
}

// Concrete command for number press
export class NumberCommand {
    constructor(receiver, number) {
        this.receiver = receiver;
        this.number = number;
    }

    execute() {
        this.receiver.handleNumberClick(this.number);
    }
}

// Concrete command for operation press
export class OperationCommand {
    constructor(receiver, operation) {
        this.receiver = receiver;
        this.operation = operation;
    }

    execute() {
        this.receiver.handleOperatorClick(this.operation);
    }
}

// You can create more commands for AC, +/- toggle, percent, etc.

export class Invoker {
    constructor() {
        this.history = [];
    }

    executeCommand(command) {
        this.history.push(command);
        command.execute();
    }

    // Implement undo functionality by reversing the last command, if needed
}
