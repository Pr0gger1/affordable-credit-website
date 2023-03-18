import React from 'react';

import applicationBlockImg from '../../../assets/img/application_block_img.jpg';

import appStoreLogo from '../../../assets/img/app_store_logo.png';
import googlePlayLogo from '../../../assets/img/google_play_logo.png';

import styles from './styles/ApplicationBlock.module.scss';
import FeedbackCardApp from "../../ui/cards/FeedbackCardApp";

function ApplicationBlock() {
    return (
        <section className={styles.app__section}>
            <img
                src={applicationBlockImg}
                alt="credit application"
            />

            <div className={styles.app__store_info}>
                <div className={styles.app_store__header}>
                    <h5>Apple</h5>
                    <p>New Apps We Love</p>
                </div>

                <div className={styles.app_store__header}>
                    <h5>Time</h5>
                    <p>Best Apps of the Year</p>
                </div>

                <div className={styles.app_store__header}>
                    <h5>Real simple</h5>
                    <p>Smart Money Award</p>
                </div>

                <div className={styles.feedback__container}>
                    <FeedbackCardApp
                        storeLogo={appStoreLogo}
                        score={4.8}
                        reviews={'55,000'}
                        starsCount={4}
                    />

                    <FeedbackCardApp
                        storeLogo={googlePlayLogo}
                        score={4.7}
                        reviews={'52,000'}
                        starsCount={4}
                    />
                </div>
            </div>
        </section>
    );
}

export default ApplicationBlock;