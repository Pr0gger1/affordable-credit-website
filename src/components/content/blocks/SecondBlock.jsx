import React from 'react';
import styles from './styles/SecondBlock.module.scss';

import phonesAndCashImg from '../../../assets/img/second_block_phones_and_cash.jpg'
import img from '../../../assets/img/over500million.jpg';

const SecondBlock = () => {
    return (
        <section className={styles.second_block__section}>
            <div className={styles.left__img}>
                <img src={phonesAndCashImg} alt="phones and money"/>
            </div>
            <div className={styles.right__img}>
                <img src={img} alt=""/>
            </div>
        </section>
    );
};

export default SecondBlock;