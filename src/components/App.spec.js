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

        expect(container).toMatchInlineSnapshot(`
            <div>
              <header
                class="header"
              >
                <div
                  class="container"
                >
                  <a
                    class="header__link"
                    href="/"
                  >
                    <h1
                      class="header__title"
                    >
                      The Powerpuff Girls
                    </h1>
                    <img
                      alt="Logo"
                      class="header__logo"
                      src="[object Object]"
                    />
                  </a>
                </div>
              </header>
              <div
                class="home"
              >
                <div
                  class="container"
                >
                  <a
                    class="home__link"
                    href="/shows/6771"
                  >
                    Watch show
                  </a>
                </div>
              </div>
            </div>
        `);
    });
});
