import React from "react";
import outroImg from '../../../assets/img/outro_img.jpg';

import styles from './styles/OutroBlock.module.css';

const OutroBlock = () => {
    return (
        <section className={styles.outro__section}>
            <p className={styles.outro__text}>
                We believe credit should be more fair
            </p>
            <img src={outroImg} alt="outro"/>
        </section>
    );
};

export default OutroBlock;