import { Command } from './command';

// AdditionCommand
export class AdditionCommand extends Command {
    constructor(receiver, memoryValue, valueToAdd) {
        super();
        this.receiver = receiver;
        this.value1 = memoryValue;
        this.value2 = valueToAdd;
    }

    execute() {
        this.receiver.add(this.value1, this.value2);
    }
}

// SubtractionCommand
export class SubtractionCommand extends Command {
    constructor(receiver, value) {
        super();
        this.receiver = receiver;
        this.value = value;
    }

    execute() {
        this.receiver.subtract(this.value);
    }
}

// MultiplicationCommand
export class MultiplicationCommand extends Command {
    constructor(receiver, value) {
        super();
        this.receiver = receiver;
        this.value = value;
    }

    execute() {
        this.receiver.multiply(this.value);
    }
}

// DivisionCommand
export class DivisionCommand extends Command {
    constructor(receiver, value) {
        super();
        this.receiver = receiver;
        this.value = value;
    }

    execute() {
        this.receiver.divide(this.value);
    }
}
