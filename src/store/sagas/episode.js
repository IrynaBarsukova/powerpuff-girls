import { takeEvery, call, put } from 'redux-saga/effects';

import actionTypes from '../actions/episode/actionTypes';
import { loadEpisodeSucceeded, loadEpisodeFailed } from '../actions/episode';
import { getEpisode } from '../../services/show.service';

export function* loadEpisode({ payload: { id } }) {
    try {
        const episode = yield call(getEpisode, id);
        yield put(loadEpisodeSucceeded(episode.data))
    } catch (error) {
        yield put(loadEpisodeFailed(error))
    }
}

export default function* EpisodeSaga() {
    yield takeEvery(actionTypes.LOAD_EPISODE_STARTED, loadEpisode);
}
