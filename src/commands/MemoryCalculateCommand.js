import { NUMBER_FROM_LOCAL_STORAGE } from '../constants';

export class MemoryCalculateCommand {
    constructor(firstOperand, operand) {
        this.firstOperand = firstOperand;
        this.operand = operand;
    }

    execute() {
        if (this.operand === 'addition') {
            if (localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) {
                console.log('this.firstOperand', this.firstOperand);
                localStorage.setItem(NUMBER_FROM_LOCAL_STORAGE, this.firstOperand);
                console.log('22222', localStorage);
                return this.firstOperand;
            }
            localStorage.setItem(
                'number',
                parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) + this.firstOperand,
            );
            console.log('111111', localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE));
            return this.firstOperand;
        } else {
            console.log('CALC get', !localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE));
            localStorage.setItem(
                'number',
                parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) - this.firstOperand,
            );

            return this.firstOperand;
        }
    }

    redo() {
        return this.firstOperand;
    }
}
