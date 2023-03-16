import React, {useEffect, useState} from "react";

import { CardCarousel } from "../../ui/cardCarousel/CardCarousel";
import { Pagination } from "../../ui/pagination/Pagination";
import getPageCount from "../../../utils/getPageCount";

import styles from './styles/FeedbackBlock.module.css';

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
        caption: "Lundberg T."
    },
    {
        text: "At vero eos et ducimus quos dolores sint occaecati cupiditate non provident.",
        caption: "Mattsson E."
    },
    {
        text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
        caption: "Hansen E."
    },
    {
        text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
        caption: "Johansson V."
    },
                {
        text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
        caption: "Sanika S."
    },
    {
        text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
        caption: "Berg A."
    },
                {
        text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
        caption: "Lind S."
    },
    {
        text: "Empower Thrive gave me the money I needed when I needed it. Quick and easy.",
        caption: "Berglund I."
    },
];

const FeedbackBlock = () => {

    const [cardsArray, setCardsArray] = useState(cardsData);
    const cardLimit = 3;

    const [totalPages, setTotalPages] = useState(1);
    const [currentCardPage, setCurrentCardPage] = useState(1);


    const lastIndexCard = cardLimit * currentCardPage;
    const firstCardLimit = lastIndexCard - cardLimit;

    const currentCardsArray = cardsArray.slice(firstCardLimit, lastIndexCard)


    useEffect(() => {
        const pageCount = getPageCount(cardsArray.length, cardLimit);

        setTotalPages(pageCount);
    }, [cardsArray]);

    return (
        <section className={styles.feedback__section}>
            <h2 id="feedback_header">
                Giving credit where credit's due
            </h2>

            <CardCarousel
                currentPage={currentCardPage}
                setCurrentPage={setCurrentCardPage}
                cards={currentCardsArray}
            />

            <Pagination
                page={currentCardPage}
                totalPages={totalPages}
                changePage={setCurrentCardPage}
            />
        </section>
    );
};

export default FeedbackBlock;