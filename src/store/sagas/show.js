import { takeEvery, all, call, put } from 'redux-saga/effects';

import actionTypes from '../actions/show/actionTypes';
import { loadShowSucceeded, loadShowFailed } from '../actions/show';
import { getShow, getEpisodes } from '../../services/show.service';

export function* loadShow({ payload: { id } }) {
    try {
        const [show, episodes] = yield all([
            call(getShow, id),
            call(getEpisodes, id),
        ]);
        yield put(loadShowSucceeded({ ...show.data, episodes: episodes.data }))
    } catch (error) {
        yield put(loadShowFailed(error))
    }
}

export default function* ShowSaga() {
    yield takeEvery(actionTypes.LOAD_SHOW_STARTED, loadShow);
}
