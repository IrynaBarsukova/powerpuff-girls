import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.scss';

const Container = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

Container.propTypes = {
    /**
     * Container's inner content
     */
    children: PropTypes.object,
};

export default Container;
