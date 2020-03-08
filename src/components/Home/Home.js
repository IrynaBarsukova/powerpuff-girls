import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../common/Container/Container';
import styles from './Home.scss';

function Home() {
    return (
        <div className={styles.home}>
            <Container>
                <Link to="/shows/6771" className={styles.home__link}>Watch show</Link>
            </Container>
        </div>
    );
}

export default Home;
