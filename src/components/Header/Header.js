import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../common/Container/Container';
import logo from '../../assets/images/the-powerpuff-girls.png';
import styles from './Header.scss';

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <Link to="/" className={styles.header__link}>
                    <h1 className={styles.header__title}>The Powerpuff Girls</h1>
                    <img className={styles.header__logo} src={logo} alt="Logo"/>
                </Link>
            </Container>
        </header>
    );
}

export default Header;
