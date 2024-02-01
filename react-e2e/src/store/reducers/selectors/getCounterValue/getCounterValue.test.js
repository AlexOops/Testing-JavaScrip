import {getCounterValue} from "./getCounterValue";

describe('getCounterValue', () => {

    test('test 1 - work with empty state', () => {
        expect(getCounterValue({})).toBe(0);
    });

    test('test 2 - work with filled state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100);
    });
});
