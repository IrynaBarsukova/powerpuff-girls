import axios from 'axios';

import { ROOT_API_URL } from '../constants/api.constants';

const getShow = id => {
    return axios.get(`${ROOT_API_URL}/shows/${id}`);
};

const getEpisodes = id => {
    return axios.get(`${ROOT_API_URL}/shows/${id}/episodes`);
};

const getEpisode = id => {
    return axios.get(`${ROOT_API_URL}/episodes/${id}`);
};

export { getShow, getEpisodes, getEpisode };
