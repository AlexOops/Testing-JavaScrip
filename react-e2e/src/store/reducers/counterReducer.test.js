import counterReducer, {decrement, increment} from "./counterReducer";

describe('getCounterValue', () => {

    test('test 1 - increment', () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1});
    });

    test('test 2 - decrement', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1});
    });

    test('test 3 - with empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({value: -1});
        expect(counterReducer(undefined, increment())).toEqual({value: 1});
    });
})
