import React from 'react';

import renderWithRouter from '../../mocks/router.mock';
import Header from './Header';

describe('<Header />', () => {
    it('should render Header', () => {
        const { container } = renderWithRouter(<Header />);

        expect(container).toMatchSnapshot();
    });

    it('should navigate to Home when the logo is clicked', () => {
        const { getByText } = renderWithRouter(<Header />);

        expect(getByText('The Powerpuff Girls').closest('a')).toHaveAttribute(
            'href',
            '/',
        );
    });
});
