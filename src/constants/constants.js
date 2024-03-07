export const Actions = {
    Plus: 'addition',
    Minus: 'subtraction',
    Divide: 'division',
    Multiply: 'multiplication',
    Percent: 'percent',
    Squarex: 'squarex',
    Squarerootx: 'squarerootx',
    Cubex: 'cubex',
    Tenx: 'tenx',
    Cuberootx: 'cuberootx',
    Xdegreey: 'xdegreey',
    Onedivx: 'onedivx',
    Xfactorial: 'xfactorial',
    Xrooty: 'xrooty',
    Equal: 'equal',
    Pm: 'pm',
    Mplus: 'mplus',
    Mminus: 'mminus',
    Mr: 'mr',
    Mc: 'mc',
};

export const actionsWithOneOperand = [
    Actions.Squarex,
    Actions.Squarerootx,
    Actions.Cubex,
    Actions.Cuberootx,
    Actions.Tenx,
    Actions.Onedivx,
    Actions.Percent,
    Actions.Xfactorial,
    Actions.Pm,
];

export const actionsWithMemory = [Actions.Mplus, Actions.Mminus, Actions.Mr, Actions.Mc];
