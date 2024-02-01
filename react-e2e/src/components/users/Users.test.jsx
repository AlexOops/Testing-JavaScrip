import {screen} from '@testing-library/react';
import {Users} from "./Users";
import axios from 'axios';
import userEvent from "@testing-library/user-event";
import React from "react";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import {act} from "react-dom/test-utils";

jest.mock('axios')

describe('USERS TEST', () => {

    let response;

    beforeEach(() => {
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

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);

        renderWithRouter(<Users/>);

        const users = await screen.findAllByTestId('user-item'); // массив

        expect(users.length).toBe(3); // сколько указали в моке
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test('test redirect to details page', async () => {

        axios.get.mockReturnValue(response);

        renderWithRouter(<Users/>);

        const users = await screen.findAllByTestId('user-item');

        expect(users.length).toBe(3);

        act(() => {
            userEvent.click(users[0]);
        });

        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
});