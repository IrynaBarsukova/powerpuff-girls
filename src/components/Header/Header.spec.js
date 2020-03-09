import React from 'react';

import renderWithRouter from '../../mocks/router.mock';
import Header from './Header';

describe('<Header />', () => {
    it('should render Header', () => {
        const { container } = renderWithRouter(<Header />);

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
            </div>
        `);
    });

    it('should navigate to Home when the logo is clicked', () => {
        const { getByText } = renderWithRouter(<Header />);

        expect(getByText('The Powerpuff Girls').closest('a')).toHaveAttribute(
            'href',
            '/',
        );
    });
});
