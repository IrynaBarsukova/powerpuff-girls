import ShowSaga from './show';
import EpisodeSaga from './episode';

export default function* rootSaga() {
    yield* ShowSaga();
    yield* EpisodeSaga();
}
