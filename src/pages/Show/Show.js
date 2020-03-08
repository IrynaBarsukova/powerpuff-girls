import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '../../components/common/Container/Container';
import EntityDetails from '../../components/EntityDetails/EntityDetails';
import EpisodesList from '../../components/EpisodesList/EpisodesList';
import { loadShowStarted } from '../../store/actions/show';
import styles from './Show.scss';

function Show() {
    const { showId } = useParams();
    const dispatch = useDispatch();
    const show = useSelector(state => state.show.data);
    const episodes = useSelector(state => state.show.data.episodes);
    const isLoaded = useSelector(state => state.show.loaded);


    useEffect(() => {
        dispatch(loadShowStarted(showId));
    }, [showId]);

    return (
        <div className={styles.show}>
            {
                isLoaded && (
                    <Container>
                        <EntityDetails entity={show} />
                        <EpisodesList episodes={episodes} />
                    </Container>
                )
            }
        </div>
    );
}

export default Show;
