import React from 'react';

import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar__container}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__element}>
                    <a href="/">
                        About us
                    </a>
                </li>

                <li className={styles.navbar__element}>
                    <a href="/">
                        Customer Stories
                    </a>
                </li>
                <li className={styles.navbar__element}>
                    <a href="/">
                        Quiz
                    </a>
                </li>
                <li className={styles.navbar__element}>
                    <a href="/">
                        Support
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;