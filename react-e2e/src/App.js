import React from 'react';
import {AppRouter} from "./router/AppRouter";
import {Navbar} from "./components/Navbar/Navbar";

export const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};