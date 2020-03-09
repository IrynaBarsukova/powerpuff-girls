import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import * as episodeSagas  from '../episode';
import actionTypes from '../../actions/episode/actionTypes';
import { getEpisode } from '../../../services/show.service';
import mockEpisode  from '../../../mocks/episode.mock';

describe('EpisodeSaga', () => {
    test('should load episode', () => {
        const action = {
            type: actionTypes.LOAD_EPISODE_STARTED,
            payload: {
                id: 1,
            },
        };

        return expectSaga(episodeSagas.loadEpisode, action)
            .provide([[matchers.call.fn(getEpisode), { data: mockEpisode }]])
            .put({
                type: actionTypes.LOAD_EPISODE_SUCCEEDED,
                payload: { episode: mockEpisode },
            })
            .run();
    });

    test('should handle error if it happened during loading', () => {
        const action = {
            type: actionTypes.LOAD_EPISODE_STARTED,
            payload: {
                id: 1,
            },
        };
        const error = new Error('404 Episode not found');

        return expectSaga(episodeSagas.loadEpisode, action)
            .provide([[matchers.call.fn(getEpisode), throwError(error)]])
            .put({
                type: actionTypes.LOAD_EPISODE_FAILED,
                payload: {
                    error,
                },
            })
            .run();
    });
});
