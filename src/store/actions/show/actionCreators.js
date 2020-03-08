import actionTypes from './actionTypes';

export const loadShowStarted = id => ({
    type: actionTypes.LOAD_SHOW_STARTED,
    payload: { id },
});

export const loadShowSucceeded = show => ({
    type: actionTypes.LOAD_SHOW_SUCCEEDED,
    payload: { show },
});

export const loadShowFailed = error => ({
    type: actionTypes.LOAD_SHOW_FAILED,
    payload: { error },
});
