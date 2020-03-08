import axios from 'axios';

const getShow = id => {
    return axios.get(`http://api.tvmaze.com/shows/${id}`);
};

const getEpisodes = id => {
    return axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
};

const getEpisode = id => {
    return axios.get(`http://api.tvmaze.com/episodes/${id}`);
};

export { getShow, getEpisodes, getEpisode };
