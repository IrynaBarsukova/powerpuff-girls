import React from 'react';
import { Provider } from 'react-redux';

import MockStore from '../mocks/store.mock';
import renderWithRouter from '../mocks/router.mock';
import App from './App';

describe('<App />', () => {
    let store;

    beforeEach(() => {
        store = new MockStore({});
    });

    it('should render App', () => {
        const { container } = renderWithRouter(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(container).toMatchSnapshot();
    });
});
