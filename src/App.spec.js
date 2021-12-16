import { cleanup } from '@testing-library/react';
import {
    mockdata,
    actionCheck,
    expectedActions
} from './mockdata';
import {
    createAction,
    array_move,
    revertActionsGen
} from './utils.js';

afterEach(() => {
    cleanup();
});

test('It should create new actions', () => {
    const action = createAction({
        id: 1, 
        a: 0,
        b: 1
    });

    expect(action).toBeTruthy();
    expect(action).toEqual(actionCheck);
});

test('It should move posts', () => {
    const newArray = array_move(mockdata, 0, 1);

    expect(mockdata).toEqual(newArray);
});

test('It should time travels', () => {
    const actions = [actionCheck];

    const revertActions = revertActionsGen(0, actions);

    revertActions.next().value;

    expect([]).toEqual(actions);
});