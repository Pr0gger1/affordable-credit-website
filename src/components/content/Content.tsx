import React from 'react';

import styles from './Content.module.css';

import introduceBlockImg from '../../assets/img/introduce_block_img.jpg';

const Content = () => {
    return (
        <div className={styles.content__container}>
            <section className={styles.introduce__section}>
                <div className={styles.introduce_text__block}>
                    <h1>Your journey to better credit starts here</h1>
                    <p>
                        Think the credit system is stacked against you? So do we.
                        We'll help you get the credit you deserve
                    </p>

                    <div>
                        <input type="text"/>
                        <button>Get app</button>
                    </div>
                    <p>
                        Get up to a $250 advance* today,
                        grow to a $1,000 line of credit* over time
                    </p>

                    <div>
                        <span>
                        </span>

                        <span>
                        </span>

                        <span>
                        </span>
                    </div>
                    <span>
                        Empower is a financial technology company, not a bank.
                        Banking services provided by nbkc bank, Member FDIC.
                        Empower Thrive provided by FinWise Bank, Member FDIC.
                    </span>
                </div>

                <div className={styles.introduce_image__block}>
                    <img src={introduceBlockImg} alt="introduce organization"/>
                </div>

            </section>
        </div>
    );
};
export default Content;