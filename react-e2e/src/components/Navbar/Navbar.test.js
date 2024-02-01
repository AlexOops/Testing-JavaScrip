import {screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import {Navbar} from "./Navbar";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";

describe('NAVIGATE TEST', () => { // проверяем все линки

    test('test 1 - user link', async () => {

        renderWithRouter(<Navbar/>);

        const usersLink = screen.getByTestId('users-link');

        userEvent.click(usersLink);

        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });

    test('test 2 - about link', async () => {
        renderWithRouter(<Navbar/>);

        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);

        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('test main link', async () => {

        renderWithRouter(<Navbar/>, '/users');

        const mainLink = screen.getByTestId('main-link');

        userEvent.click(mainLink);

        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
})

