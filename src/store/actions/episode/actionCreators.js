import actionTypes from './actionTypes';

export const loadEpisodeStarted = id => ({
    type: actionTypes.LOAD_EPISODE_STARTED,
    payload: { id },
});

export const loadEpisodeSucceeded = episode => ({
    type: actionTypes.LOAD_EPISODE_SUCCEEDED,
    payload: { episode },
});

export const loadEpisodeFailed = error => ({
    type: actionTypes.LOAD_EPISODE_FAILED,
    payload: { error },
});

export const clearEpisode = () => ({
    type: actionTypes.CLEAR_EPISODE,
    payload: {},
});
