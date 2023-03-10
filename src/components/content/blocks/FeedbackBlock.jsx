import React from "react";

import styles from './styles/FeedbackBlock.module.css';
import {CardCarousel} from "../../ui/cardCarousel/CardCarousel";

const FeedbackBlock = () => {
    return (
        <section className={styles.feedback__section}>
            <h2>Giving credit where credit's due</h2>
            <CardCarousel/>

        </section>
    );
};

export default FeedbackBlock;