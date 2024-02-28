import {setStrAsValue} from "./setStrAsValue";
import {valueEl} from "./index";

class Calculator {
    constructor() {
        this.command = '';
        this.history = [];
    }

    setCommand(value) {
        this.command = value;
    }

    executeCommand() {
        const result = this.command.execute();
        if (result === Infinity) {
            this.history.push(0);
            // computation.innerHTML = 0;
            // return computation.innerHTML;
        }
        this.history.push(result);
        setStrAsValue(valueEl, result)
        // computation.innerHTML = result;
    }

    executeRedo() {
        const lastCommand = this.history.pop();
        if (lastCommand) {
            return this.command.redo();
        }
    }
}

const calculator = new Calculator();

export { calculator };