import React from "react";
import styles from './styles/FooterNavbar.module.scss';

const FooterNavbar = () => {
    return (
        <div className={styles.footer__navbar}>
            <ul className={styles.footer__navbar_list}>
                <li className={styles.navbar__item}>
                    About us
                </li>
                <li className={styles.navbar__item}>
                    Customer Stories
                </li>
                <li className={styles.navbar__item}>
                    Careers
                </li>
                <li className={styles.navbar__item}>
                    Quiz
                </li>
                <li className={styles.navbar__item}>
                    Support
                </li>
            </ul>

            <ul className={styles.footer__navbar_list}>
                <li>
                    Legal
                </li>
                <li>
                    Terms of Service
                </li>
                <li>
                    Privacy
                </li>
            </ul>

            <ul className={styles.footer__navbar_list}>
                <li>
                    TikTok
                </li>
                <li>
                    Instagram
                </li>
                <li>
                    Twitter
                </li>
            </ul>
        </div>
    );
};

export default FooterNavbar;