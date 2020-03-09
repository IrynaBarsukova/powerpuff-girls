import showReducer from '../show';
import actionTypes from '../../actions/show/actionTypes';
import mockShow from '../../../mocks/show.mock';

describe('Show reducer', () => {
    it('should start loading Show with Episodes', () => {
        const action = {
            type: actionTypes.LOAD_SHOW_STARTED,
            payload: { id: 1 },
        };
        const newState = showReducer({}, action);
        expect(newState.loading).toEqual(true);
    });

    it('should set Show to store if loading was successful', () => {
        const action = {
            type: actionTypes.LOAD_SHOW_SUCCEEDED,
            payload: { show: mockShow },
        };
        const newState = showReducer({}, action);
        expect(newState.loading).toEqual(false);
        expect(newState.loaded).toEqual(true);
        expect(newState.data).toEqual(mockShow);
    });

    it('should set Error to store if loading was failed', () => {
        const action = {
            type: actionTypes.LOAD_SHOW_FAILED,
            payload: { error: new Error() },
        };
        const newState = showReducer({}, action);
        expect(newState.loading).toEqual(false);
        expect(newState.error).toEqual(true);
    });
});
