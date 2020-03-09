import React from 'react';
import { render } from '@testing-library/react';

import mockShow from '../../mocks/show.mock';
import EntityDetails from './EntityDetails';

describe('<EntityDetails />', () => {
    it('should render EpisodesList', () => {
        const { container } = render(
            <EntityDetails entity={mockShow} />,
        );

        expect(container).toMatchSnapshot();
    });
});
