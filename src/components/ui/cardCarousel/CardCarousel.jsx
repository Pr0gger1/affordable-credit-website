import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from './CardCarousel.module.css';
import './CardCarouselAnimation.css';

export const CardCarousel = ({ cards }) => {

    return (
        <TransitionGroup className={styles.carousel__container}>
            {
                cards.map((card, index) => (
                    <CSSTransition
                        key={index}
                        timeout={500}
                        classNames={`card`}
                        unmountOnExit
                        >
                            <div className={styles.carousel__card}>
                                <blockquote className={styles.carousel__text}>
                                    "{card.text}"
                                </blockquote>

                                <span className={styles.carousel__caption}>
                                    {card.caption}
                                </span>
                            </div>
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    );
};