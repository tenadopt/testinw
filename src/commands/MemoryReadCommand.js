import { NUMBER_FROM_LOCAL_STORAGE } from '../constants';

export class MemoryReadCommand {
    constructor(operand) {
        this.operand = operand;
    }

    execute() {
        console.log('READ NUMBER_FROM_LOCAL_STORAGE', NUMBER_FROM_LOCAL_STORAGE);
        console.log(
            'READ localStorage',
            parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)),
        );
        this.result = parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE));
        console.log('READ inside Read', this.result);
        return this.result ? this.result : 0;
    }

    redo() {
        return this.operand;
    }
}
