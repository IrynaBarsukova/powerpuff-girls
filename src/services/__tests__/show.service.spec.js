import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getShow, getEpisodes, getEpisode } from '../show.service';
import mockShow from '../../mocks/show.mock';
import mockEpisode from '../../mocks/episode.mock';

describe('Show service', () => {
    const mock = new MockAdapter(axios);

    describe('getShow', () => {
        it('should return show data', done => {
            mock.onGet(`http://api.tvmaze.com/shows/${mockShow.id}`).reply(200, mockShow);

            getShow(mockShow.id).then(({ data }) => {
                expect(data).toEqual(mockShow);
                done();
            });
        });
    });

    describe('getEpisodes', () => {
        it('should return show episodes', done => {
            mock.onGet(`http://api.tvmaze.com/shows/${mockShow.id}/episodes`).reply(200, mockShow.episodes);

            getEpisodes(mockShow.id).then(({ data }) => {
                expect(data).toEqual(mockShow.episodes);
                done();
            });
        });
    });

    describe('getEpisode', () => {
        it('should return episode data', done => {
            mock.onGet(`http://api.tvmaze.com/episodes/${mockEpisode.id}`).reply(200, mockEpisode);

            getEpisode(mockEpisode.id).then(({ data }) => {
                expect(data).toEqual(mockEpisode);
                done();
            });
        });
    });
});
