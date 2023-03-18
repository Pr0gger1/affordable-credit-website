import React from 'react';
import {Card} from "../../ui/cards/Card";

import productMockup1 from '../../../assets/img/mockups/product_mockup1.png';
import productMockup2 from '../../../assets/img/mockups/product_mockup2.png';
import creditCard from '../../../assets/img/mockups/credit_card.png';
import accountCard from '../../../assets/img/mockups/account_card.png';

import styles from './styles/ProductBlock.module.scss';

const ProductBlock = () => {
    return (
        <section className={styles.product__section}>
            <div className={styles.choose_product}>
                <span>STEP 1</span>
                <h2>Choose your product</h2>

                <div className={styles.cards__block}>
                    <Card
                        background='var(--bgColorCardFirst)'
                        direction='row'
                    >
                        <div className={styles.card__container}>
                            <img src={productMockup1} alt="mockup 1"/>

                            <div className={styles.card__content}>
                                <span>GET STARTED WITH</span>
                                <h3 className={styles.header_card}>
                                    Empower Cash Advance*
                                </h3>

                                <ul className={styles.card__list}>
                                    <li>Receive up to $250 today</li>
                                    <li>No interest, no late fees, no credit checks</li>
                                    <li>Instant delivery^</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <Card background='var(--bgColorCardFirst)'>
                        <div className={styles.card__container}>
                            <img src={productMockup2} alt="mockup 1"/>

                            <div className={styles.card__content}>
                                <span>THEN UPGRADE TO</span>
                                <h3 className={styles.header_card}>
                                    Empower Thrive*
                                </h3>

                                <span className={styles.card__tag}>
                                    COMING SOON
                                </span>

                                <ul className={styles.card__list}>
                                    <li>
                                        Start with a $200 line of credit and grow to $1,000 with every on-time payment
                                    </li>
                                    <li>
                                        Enjoy 0% APR†
                                        <span className={styles.card__subtext}>
                                            when you pay your balance on your next paycheck date, otherwise 35.99% APR
                                        </span>
                                    </li>
                                    <li>
                                        Build credit over time‡
                                    </li>
                                </ul>

                                <button className={styles.read_more__btn}>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className={styles.choose_product}>
                <span>STEP 2</span>
                <h2>Choose where to deposit your cash</h2>

                <div className={styles.cards__block}>
                    <Card background='var(--bgColorCardSecond)' direction='row'>
                        <div className={styles.card__container}>
                            <img src={creditCard} alt="credit card"
                                style={{position: "static"}}
                            />

                            <div className={styles.card__content}>
                                <span className={styles.card__tag}>
                                    RECOMMENDED
                                </span>
                                <h3 className={styles.header_card}>
                                    Empower Card
                                </h3>

                                <span>
                                    Open a debit card account through Empower with no overdraft fees
                                </span>

                                <ul className={styles.card__list}>
                                    <li>
                                        Get free instant delivery of your Empower Cash Advance
                                    </li>

                                    <li>
                                        Get paid up to 2 days faster**
                                    </li>

                                    <li>
                                        Score cashback up to 10%^^
                                    </li>
                                </ul>

                                <button className={styles.read_more__btn}>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card background='var(--bgColorCardSecond)'>
                        <div className={styles.card__container}>
                            <img src={accountCard} alt='account'
                                style={{position: 'static'}}/>

                            <div className={styles.card__content}>

                                <h3 className={styles.header_card}>
                                    External Checking Account
                                </h3>

                               <span>
                                   Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited
                                   to your primary bank account.
                               </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </section>
    );
};

export default ProductBlock;