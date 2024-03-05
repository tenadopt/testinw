import { actions, updateDisplay } from '../index';
import { parseValue } from './parseValue';
import { calculator } from '../calculator';
import { MemoryPlusCommand } from '../commands/MemoryPlusCommand';
import { MemoryMinusCommand } from '../commands/MemoryMinusCommand';
import { MemoryReadCommand } from '../commands/MemoryReadCommand';
import { MemoryClearCommand } from '../commands/MemoryClearCommand';

export const handleMemoryClick = (value, memoryParam, action) => {
    switch (action) {
        case actions.mplus:
            calculator.setCommand(new MemoryPlusCommand(value, memoryParam));
            return calculator.executeCommand();
        case actions.mminus:
            calculator.setCommand(new MemoryMinusCommand(value, memoryParam));
            return calculator.executeCommand();
        case actions.mr:
            calculator.setCommand(new MemoryReadCommand(value, memoryParam));
            return calculator.executeCommand();
        case actions.mc:
            calculator.setCommand(new MemoryClearCommand(value, memoryParam));
            return calculator.executeCommand();
        default:
            break;
    }
    updateDisplay();
};

// const plusToMemory = (displayValue, memoryParam) => {
//     debugger;
//     const numValue = parseValue(displayValue);
//     memoryParam += numValue;
//     return memoryParam;
// };
//
// const minusToMemory = (displayValue, memoryParam) => {
//     const numValue = parseValue(displayValue);
//     memoryParam -= numValue;
//     return memoryParam;
// };
//
// const clearToMemory = memoryParam => {
//     memoryParam = 0;
//     return memoryParam;
// };
//
// const displayMemoryValue = (displayValue, memoryParam) => {
//     debugger;
//     if (displayValue === '0') {
//         return;
//     } else {
//         displayValue = memoryParam.toString();
//     }
//
//     updateDisplay(displayValue);
// };
