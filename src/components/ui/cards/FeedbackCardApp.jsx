import React, {useEffect, useState} from 'react';
import star from '../../../assets/img/icons/star_feedback.svg';

import styles from './styles/FeedbackCardApp.module.css';

const FeedbackCardApp = ({ storeLogo, score, reviews, starsCount }) => {
    const [starsCountState, setStarsCountState] = useState([]);

    useEffect(() => {
        let stars = [star];

        for (let i = 1; i < starsCount; i++) {
            stars.push(star);
        }

        setStarsCountState(stars);
    }, [starsCount])
    
    return (
        <div className={styles.feedback__card}>
            <img className={styles.feedback__store}
                 src={storeLogo}
                 alt="store logo"
            />

            <div className={styles.feedback__stars}>
                {
                    starsCountState.map((star, index) =>
                        <span key={index}>
                            <img src={star} alt=""/>
                        </span>
                    )
                }

            </div>

            <div className={styles.feedback_scores__container}>
                <span className={styles.feedback__score}>
                    {score}
                </span>

                <span className={styles.feedback__reviews}>
                    {reviews} REVIEWS
                </span>
            </div>
        </div>
    );
};

export default FeedbackCardApp;