import React from 'react';
import { render } from '@testing-library/react';

import PageNotFound from './PageNotFound';

describe('<PageNotFound />', () => {
    it('should render PageNotFound', () => {
        const { container } = render(<PageNotFound />);

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="pageNotFound"
              >
                <h2
                  class="pageNotFound__title"
                >
                  Page not found
                </h2>
              </div>
            </div>
        `);
    });
});
