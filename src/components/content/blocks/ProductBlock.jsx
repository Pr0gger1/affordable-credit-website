import React from 'react';
import styles from './styles/ProductBlock.module.css';
import {Card} from "../../ui/cards/Card";
import productMockup1 from '../../../assets/img/mockups/product_mockup1.png';

const ProductBlock = () => {
    return (
        <section className={styles.product__section}>
            <div className={styles.choose_product}>
                <span>STEP 1</span>
                <h2>Choose your product</h2>

                <div className={styles.cards__block}>
                    <Card background='#fcd0ba' direction='row'>
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
                    <Card background='#fcd0ba'>

                    </Card>
                </div>
            </div>


        </section>
    );
};

export default ProductBlock;