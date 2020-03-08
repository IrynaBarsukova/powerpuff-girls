import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Container from '../../components/common/Container/Container';
import EntityDetails from '../../components/EntityDetails/EntityDetails';
import { loadEpisodeStarted, clearEpisode } from '../../store/actions/episode';
import styles from  './Episode.scss';

function Episode() {
    const { episodeId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const episode = useSelector(state => state.episode.data);
    const isLoaded = useSelector(state => state.episode.loaded);


    useEffect(() => {
        dispatch(loadEpisodeStarted(episodeId));

        return () => dispatch(clearEpisode());
    }, [episodeId]);

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className={styles.episode}>
            {isLoaded &&
                <Container>
                    <button className={styles.episode__button} type="button" onClick={goBack}>
                        Go back
                    </button>
                    <EntityDetails entity={episode} />
                </Container>
            }
        </div>
    );
}

export default Episode;
