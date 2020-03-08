import { combineReducers } from 'redux';

import showReducer from './show';
import episodeReducer from './episode';

export default combineReducers({
    show: showReducer,
    episode: episodeReducer,
});
