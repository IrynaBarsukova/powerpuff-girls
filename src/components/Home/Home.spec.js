import React from 'react';

import renderWithRouter from '../../mocks/router.mock';
import Home from './Home';

describe('<Home />', () => {
    it('should render Home', () => {
        const { container } = renderWithRouter(<Home />);

        expect(container).toMatchInlineSnapshot(`
            <div>
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

    it('should navigate to Show Page when the link is clicked ', () => {
        const { getByText } = renderWithRouter(<Home />);

        expect(getByText('Watch show').closest('a')).toHaveAttribute('href', '/shows/6771')
    });
});
