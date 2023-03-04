import React from 'react';
import styles from './styles/IntroduceBlock.module.css';
import introduceBlockImg from '../../../assets/img/introduce_block_img.jpg';

const IntroduceBlock = () => {
    return (
        <section className={styles.introduce__section}>
            <div className={styles.introduce_text__block}>
                <h1>Your journey to better credit starts here</h1>

                <div className={styles.image__block}>
                    <img src={introduceBlockImg} alt="introduce organization"/>
                </div>

                <p>
                    Think the credit system is stacked against you? So do we.
                    We'll help you get the credit you deserve
                </p>

                <div className={styles.get_email__block}>
                    <input className={styles.get_email__input} type="text"/>
                    <button className={styles.get_app__btn}>
                        Get app
                    </button>
                </div>

                <p className={styles.introduce__special_offer}>
                    Get up to a $250 advance* today,
                    grow to a $1,000 line of credit* over time
                </p>

                <div className={styles.introduce_carousel__block}>
                    <span className={styles.carousel__element}>
                    </span>

                    <span className={`${styles.carousel__element} ${styles.active}`}>
                    </span>

                    <span className={styles.carousel__element}>
                    </span>
                </div>
                <span className={styles.introduce__notice}>
                    Empower is a financial technology company, not a bank.
                    Banking services provided by nbkc bank, Member FDIC.
                    Empower Thrive provided by FinWise Bank, Member FDIC.
                </span>
            </div>

            <div className={styles.image__block}>
                <img src={introduceBlockImg} alt="introduce organization"/>
            </div>
        </section>
    );
};
export default IntroduceBlock;