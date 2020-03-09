import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

describe('<Container />', () => {
    it('should render Container', () => {
        const { container } = render(<Container />);

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="container"
              />
            </div>
        `);
    });

    it('should render inner content', () => {
        const text = <p>Test text</p>;
        const { getByText } = render(<Container>{text}</Container>);

        expect(getByText('Test text')).toBeInTheDocument();
    });
});
