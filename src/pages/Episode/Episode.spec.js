import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import MockStore from '../../mocks/store.mock';
import renderWithRouter from '../../mocks/router.mock';
import mockEpisode from '../../mocks/episode.mock';
import Episode from './Episode';

describe('<Episode />', () => {
    let store;

    beforeEach(() => {
        store = new MockStore({ episode: { data: mockEpisode, loaded: true } });
    });

    it('should render Episode', () => {
        const { container } = renderWithRouter(
            <Provider store={store}>
                <Episode />
            </Provider>,
            { route: `shows/6771/episodes/${mockEpisode.id}` },
        );

        expect(container).toMatchSnapshot();
    });

    it('should handle Go Back button click', () => {
        const mockHistory = {
            ...createMemoryHistory({
                initialEntries: [`shows/6771/episodes/${mockEpisode.id}`],
            }),
            goBack: jest.fn(),
        };
        const { getByText } = renderWithRouter(
            <Provider store={store}>
                <Episode />
            </Provider>,
            { history: mockHistory },
        );

        fireEvent.click(getByText('Go back'));
        expect(mockHistory.goBack).toHaveBeenCalled();
    });
});
