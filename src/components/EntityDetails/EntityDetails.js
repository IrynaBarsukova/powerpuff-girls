import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html-react';

import styles from './EntityDetails.scss';

function EntityDetails({ entity }) {
    return (
            <div className={styles.entity}>
                <h2 className={styles.entity__title}>{entity.name}</h2>
                <section className={styles.entity__details}>
                    <img src={entity.image.medium} alt={entity.name}/>
                    <p
                        className={styles.entity__summary}
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(entity.summary) || '' }}
                    />
                </section>
            </div>
    );
}

EntityDetails.propTypes = {
    /**
     * Entity object to show detailed info
     */
    entity: PropTypes.shape({
        /**
         * Entity name
         */
        name: PropTypes.string,
        /**
         * Entity image url
         */
        image: PropTypes.shape({
            medium: PropTypes.string,
        }),
        /**
         * Entity summary in HTML format
         */
        summary: PropTypes.string,
    }),
};

export default EntityDetails;
