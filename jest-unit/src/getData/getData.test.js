const getData = require('./getData');
const axios = require('axios')

jest.mock('axios')

describe('getData', () => {

    let response;

    beforeEach(() => { // можно сделать all перед всеми тестами сразу
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    });

    test('test 1 - Корректное значение', async () => {

        axios.get.mockReturnValue(response);
        const data = await getData();

        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', '3']);
        expect(data).toMatchSnapshot(); // удобно проверить какие элементы вернулись
    });
});
