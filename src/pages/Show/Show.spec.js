import React from 'react';
import { Provider } from 'react-redux';

import MockStore from '../../mocks/store.mock';
import renderWithRouter from '../../mocks/router.mock';
import mockShow from '../../mocks/show.mock';
import Show from './Show';

describe('<Show />', () => {
    let store;

    beforeEach(() => {
        store = new MockStore({ show: { data: mockShow, loaded: true } });
    });

    it('should render Show', () => {
        const { container } = renderWithRouter(
            <Provider store={store}>
                <Show />
            </Provider>,
            { route: `shows/6771` },
        );

        expect(container).toMatchSnapshot();
    });
});
