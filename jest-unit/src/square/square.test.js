const square = require('./square');

// Перед каждым тестом -beforeEach(() => {});
// Вызывается перед всеми тестами - beforeAll(() => {});
// Вызывается после всех - afterAll(() => {});


describe('square', () => {

    let mockValue;

    // test('Корректное значение', () => {
    //     expect(square(2)).toBe(4);
    //     expect(square(2)).toBeLessThan(5);
    //     expect(square(2)).toBeGreaterThan(3);
    //     expect(square(2)).not.toBeUndefined();
    // });

    test('test 1 - Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow'); // замокали тот метод который нужен
        square(2);
        expect(spyMathPow).toBeCalledTimes(1); // сколько раз вызовется
    });

    test('test 2 - Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    afterEach(() => {
        jest.clearAllMocks(); // сбросить мок перед каждым новым тестом
    });
});
