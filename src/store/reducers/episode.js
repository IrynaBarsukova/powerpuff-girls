import actionTypes from '../actions/episode/actionTypes';

const initialState = {
    data: {},
    loading: false,
    loaded: false,
    error: false,
};

const episodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_EPISODE_STARTED: {
            return { ...state, loading: true };
        }
        case actionTypes.LOAD_EPISODE_SUCCEEDED: {
            return { ...state, loading: false, loaded: true, data: action.payload.episode };
        }
        case actionTypes.LOAD_EPISODE_FAILED: {
            return { ...state, loading: false, error: true };
        }
        case actionTypes.CLEAR_EPISODE: {
            return initialState;
        }
        default:
            return state;
    }
};

export default episodeReducer;
