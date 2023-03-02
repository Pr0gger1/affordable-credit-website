import React from 'react';

import HeaderMessageBlock from './HeaderMessageBlock';
import Navbar from './Navbar';

import styles from './styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header__container}>
            <HeaderMessageBlock/>
            <Navbar/>
        </header>
    );
};
export default Header;