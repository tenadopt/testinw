import { Actions } from '../constants/constants';
import { calculator } from '../calculator';
import { MemoryPlusCommand } from '../commands/MemoryPlusCommand';
import { MemoryMinusCommand } from '../commands/MemoryMinusCommand';
import { MemoryReadCommand } from '../commands/MemoryReadCommand';
import { MemoryClearCommand } from '../commands/MemoryClearCommand';

export const handleMemoryClick = (value, memoryParam, action) => {
    switch (action) {
        case Actions.Mplus:
            calculator.setCommand(new MemoryPlusCommand(value, memoryParam));

            return calculator.executeCommand();
        case Actions.Mminus:
            calculator.setCommand(new MemoryMinusCommand(value, memoryParam));

            return calculator.executeCommand();
        case Actions.Mr:
            calculator.setCommand(new MemoryReadCommand(value, memoryParam));

            return calculator.executeCommand();
        case Actions.Mc:
            calculator.setCommand(new MemoryClearCommand(value, memoryParam));

            return calculator.executeCommand();
        default:
            break;
    }
};
