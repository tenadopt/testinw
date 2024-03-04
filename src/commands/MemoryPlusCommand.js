import { NUMBER_FROM_LOCAL_STORAGE } from '../constants';

export class MemoryPlusCommand {
    constructor(operand) {
        this.operand = operand;
    }

    execute() {
        if (!localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) {
            debugger;
            this.result = localStorage.setItem(NUMBER_FROM_LOCAL_STORAGE, this.operand);
            return this.result;
        }
        localStorage.setItem(
            'number',
            parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) + this.operand,
        );
        console.log('NUMBER_FROM_LOCAL_STORAGE', NUMBER_FROM_LOCAL_STORAGE);
        return this.operand;
    }

    redo() {
        return this.operand;
    }
}
