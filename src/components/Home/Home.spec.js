import React from 'react';

import renderWithRouter from '../../mocks/router.mock';
import Home from './Home';

describe('<Home />', () => {
    it('should render Home', () => {
        const { container } = renderWithRouter(<Home />);

        expect(container).toMatchSnapshot();
    });
});
