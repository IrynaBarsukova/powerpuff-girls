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

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="episode"
              >
                <div
                  class="container"
                >
                  <button
                    class="episode__button"
                    type="button"
                  >
                    Go back
                  </button>
                  <div
                    class="entity"
                  >
                    <h2
                      class="entity__title"
                    >
                      Bye Bye, Bellum
                    </h2>
                    <section
                      class="entity__details"
                    >
                      <img
                        alt="Bye Bye, Bellum"
                        class="entity__image"
                        src="http://static.tvmaze.com/uploads/images/medium_landscape/53/132631.jpg"
                      />
                      <p
                        class="entity__summary"
                      >
                        <p>
                          The Mayor of Townsville overworks the Powerpuff Girls after his secretary Sara Bellum quits
                        </p>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
        `);
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
