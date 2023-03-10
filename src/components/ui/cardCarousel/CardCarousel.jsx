import { useState } from "react";
import styles from './CardCarousel.module.css';

export const CardCarousel = () => {
    const cardsData = [
        {
            text: "Empower Thrive has been amazing since day one.",
            caption: "Roberto V."
        },
        {
            text: "Empower Thrive got me through a tough spot.",
            caption: "Demarcus O."
        },
        {
            text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
            caption: "Sanika S."
        }
    ];

    const [cardsArray, setCardsArray] = useState(cardsData);
    const [totalPages, setTotalPages] = useState(1);
    const [currentCardPage, setCurrentCardPage] = useState(1);

    const cardLimit = 3;

    const lastIndexCard = cardLimit * currentCardPage;
    const firstCardLimit = lastIndexCard - cardLimit;

    return (
        <div className={styles.carousel__container}>
            {
                cardsArray.map((card, index) =>
                    <div className={styles.carousel__card}
                        key={index}
                    >
                        <blockquote className={styles.carousel__text}>
                            {card.text}
                        </blockquote>

                        <span className={styles.carousel__caption}>
                            {card.caption}
                        </span>
                    </div>
                )
            }
        </div>
    );
};