import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../router/AppRouter";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";


// MemoryRouter - роутер для тестирования

export const renderWithRouter = (component, initialRoute = '/') => {
    return render(
        <Provider store={createReduxStore()}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    )
}
