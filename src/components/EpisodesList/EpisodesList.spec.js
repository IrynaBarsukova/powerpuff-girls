import React from 'react';

import renderWithRouter from '../../mocks/router.mock';
import mockShow from '../../mocks/show.mock';
import EpisodesList from './EpisodesList';

describe('<EpisodesList />', () => {
    it('should render EpisodesList', () => {
        const { container } = renderWithRouter(
            <EpisodesList episodes={mockShow.episodes} />,
            { route: `/shows/6771` }
        );

        expect(container).toMatchSnapshot();
    });
});
