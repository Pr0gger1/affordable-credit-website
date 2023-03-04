import React from "react";
import styles from './styles/FooterNavbar.module.css';

const FooterNavbar = () => {
    return (
        <div className={styles.footer__navbar}>
            <ul className={styles.footer__navbar_list}>
                <li>
                    About us
                </li>
                <li>
                    Customer Stories
                </li>
                <li>
                    Careers
                </li>
                <li>
                    Quiz
                </li>
                <li>
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