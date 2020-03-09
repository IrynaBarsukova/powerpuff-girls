import React from 'react';

import renderWithRouter from '../../mocks/router.mock';
import mockShow from '../../mocks/show.mock';
import EpisodesList from './EpisodesList';

describe('<EpisodesList />', () => {
    it('should render EpisodesList', () => {
        const { container } = renderWithRouter(
            <EpisodesList episodes={mockShow.episodes} />,
        );

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="episodes"
              >
                <h3
                  class="episodes__title"
                >
                  Episodes
                </h3>
                <div
                  class="episodesList"
                >
                  <div
                    class="episodesList__episode"
                  >
                    <a
                      href="//episodes/657308"
                    >
                      <img
                        alt="Escape from Monster Island"
                        src="http://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg"
                      />
                      <p>
                        Escape from Monster Island
                      </p>
                      <p>
                        1
                        x
                        1
                      </p>
                    </a>
                  </div>
                  <div
                    class="episodesList__episode"
                  >
                    <a
                      href="//episodes/691594"
                    >
                      <img
                        alt="Bye Bye, Bellum"
                        src="http://static.tvmaze.com/uploads/images/medium_landscape/53/132631.jpg"
                      />
                      <p>
                        Bye Bye, Bellum
                      </p>
                      <p>
                        1
                        x
                        7
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        `);
    });

    it('should navigate to Episode detailed page by click', () => {
        const { getByText } = renderWithRouter(
            <EpisodesList episodes={mockShow.episodes} />,
            { route: `/shows/6771` },
        );

        expect(
            getByText(mockShow.episodes[0].name).closest('a'),
        ).toHaveAttribute(
            'href',
            `/shows/6771/episodes/${mockShow.episodes[0].id}`,
        );

        expect(
            getByText(mockShow.episodes[1].name).closest('a'),
        ).toHaveAttribute(
            'href',
            `/shows/6771/episodes/${mockShow.episodes[1].id}`,
        );
    });
});
