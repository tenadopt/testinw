export class Invoker {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    executeCommand() {
        if (this.command) {
            this.command.execute();
        }
    }
}
