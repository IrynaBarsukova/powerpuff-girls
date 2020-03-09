import React from 'react';
import { render } from '@testing-library/react';

import mockShow from '../../mocks/show.mock';
import EntityDetails from './EntityDetails';

describe('<EntityDetails />', () => {
    it('should render EpisodesList', () => {
        const { container } = render(
            <EntityDetails entity={mockShow} />,
        );

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="entity"
              >
                <h2
                  class="entity__title"
                >
                  The Powerpuff Girls
                </h2>
                <section
                  class="entity__details"
                >
                  <img
                    alt="The Powerpuff Girls"
                    class="entity__image"
                    src="http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg"
                  />
                  <p
                    class="entity__summary"
                  >
                    <p>
                      The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as 
                      <b>
                        The Powerpuff Girls
                      </b>
                      . Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to 'fight like a girl.'
                    </p>
                  </p>
                </section>
              </div>
            </div>
        `);
    });
});
