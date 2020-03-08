import actionTypes from '../actions/show/actionTypes';

const initialState = {
    data: {},
    loading: false,
    loaded: false,
    error: false,
};

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_SHOW_STARTED: {
            return { ...state, loading: true };
        }
        case actionTypes.LOAD_SHOW_SUCCEEDED: {
            return { ...state, loading: false, loaded: true, data: action.payload.show };
        }
        case actionTypes.LOAD_SHOW_FAILED: {
            return { ...state, loading: false, error: true };
        }
        default:
            return state;
    }
};

export default showReducer;
