import episodeReducer from '../episode';
import actionTypes from '../../actions/episode/actionTypes';
import mockEpisode from '../../../mocks/episode.mock';

describe('Episode reducer', () => {
    it('should start loading Episode', () => {
        const action = {
            type: actionTypes.LOAD_EPISODE_STARTED,
            payload: { id: 1 },
        };
        const newState = episodeReducer({}, action);
        expect(newState.loading).toEqual(true);
    });

    it('should set Episode to store if loading was successful', () => {
        const action = {
            type: actionTypes.LOAD_EPISODE_SUCCEEDED,
            payload: { episode: mockEpisode },
        };
        const newState = episodeReducer({}, action);
        expect(newState.loading).toEqual(false);
        expect(newState.loaded).toEqual(true);
        expect(newState.data).toEqual(mockEpisode);
    });

    it('should set Error to store if loading was failed', () => {
        const action = {
            type: actionTypes.LOAD_EPISODE_FAILED,
            payload: { error: new Error() },
        };
        const newState = episodeReducer({}, action);
        expect(newState.loading).toEqual(false);
        expect(newState.error).toEqual(true);
    });
});
