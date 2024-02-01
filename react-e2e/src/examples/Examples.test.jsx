import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Examples from "./Examples";

//GET - 100 % должен найтись элемент, если не находит, тест падает в ошибку;
//QUERY - проверка на существование элемента (доказать отсутствие);
//FIND - для работы с асинхронным кодом(возвращает промис);

//fireEvent.click(elem) - предназначен для работы с событиями;
//userEvent.type(input, '123123') - эмулирует нажатия пользователя

describe('TEST EXAMPLES', () => {

    test('test 1 - renders learn react link', () => {

        render(<Examples />);

        const helloWorldElem = screen.getByText(/hello world/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);

        expect(helloWorldElem).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();

    });

    test('test 2 - renders learn react link', async() => {

        render(<Examples />);

        // const helloWorldElem = screen.queryByText(/hello2/i)
        // expect(helloWorldElem).toBeNull()

        screen.debug(); //обрисовывает документ
        const helloWorldElem = await screen.findByText(/data/i)

        expect(helloWorldElem).toBeInTheDocument(); // существование в документе
        expect(helloWorldElem).toHaveStyle({color: 'red'});
        screen.debug();
    });

    test("test 3 - click event", () => {

        render(<Examples />);

        const btn = screen.getByTestId('toggle-btn');

        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    });

    test("test 4 - input event", () => {

        render(<Examples />);

        const input = screen.getByPlaceholderText(/input value/i) // получили input

        expect(screen.queryByTestId('value-elem')).toContainHTML(''); // проверили что отсутствует через - query

        userEvent.type(input, '123123'); // ввел данные

        expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
    });
});