import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from  './EpisodesList.scss';

function EpisodesList({ episodes }) {
    return (
        <div className={styles.episodes}>
            <h3 className={styles.episodes__title}>Episodes</h3>
            <div className={styles.episodesList}>
                {
                    episodes.map(({ id, name, season, number, image }) => (
                        <div key={id} className={styles.episodesList__episode}>
                            <Link to={location => `${location.pathname}/episodes/${id}`}>
                                <img src={image && image.medium} alt={name}/>
                                <p>{name}</p>
                                <p>{season}x{number}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

EpisodesList.propTypes = {
    /**
     * The list of show's available episodes
     */
    episodes: PropTypes.array,
};

export default EpisodesList;
