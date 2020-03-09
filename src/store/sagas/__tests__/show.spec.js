import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import * as showSagas  from '../show';
import actionTypes from '../../actions/show/actionTypes';
import { getShow, getEpisodes } from '../../../services/show.service';
import mockShow  from '../../../mocks/show.mock';

describe('ShowSaga', () => {
    const action = {
        type: actionTypes.LOAD_SHOW_STARTED,
        payload: {
            id: 1,
        },
    };

    test('should load show with episodes', () => {
        return expectSaga(showSagas.loadShow, action)
            .provide([
                [matchers.call.fn(getShow), { data: mockShow }],
                [matchers.call.fn(getEpisodes), { data: mockShow.episodes }],
            ])
            .put({
                type: actionTypes.LOAD_SHOW_SUCCEEDED,
                payload: { show: mockShow },
            })
            .run();
    });

    test('should handle error if it happened during loading', () => {
        const error = new Error('404 Show not found');

        return expectSaga(showSagas.loadShow, action)
            .provide([[matchers.call.fn(getShow), throwError(error)]])
            .put({
                type: actionTypes.LOAD_SHOW_FAILED,
                payload: {
                    error,
                },
            })
            .run();
    });
});
