import { ChangeSignCommand } from './ChangeSignCommand';
import { describe, expect, test } from '@jest/globals';

describe('Change sing command tests', () => {
    test('Should execute command with right answer', () => {
        const changeSignCommand = new ChangeSignCommand(2);

        expect(changeSignCommand.execute()).toBe(-2);
    });
    test('Should redo command with right answer', () => {
        const changeSignCommand = new ChangeSignCommand(4);

        changeSignCommand.execute();
        expect(changeSignCommand.redo()).toBe(4);
    });
});
