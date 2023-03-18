import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./CardCarousel.module.scss";
import "../animations/CardCarouselAnimation.css";

export const CardCarousel = ({ cards, currentPage }) => {
  return (
    <TransitionGroup className={styles.carousel__container}>
      {cards.map((card, index) => (
        <CSSTransition
          key={`${index}-${currentPage}`}
          timeout={500}
          classNames={'card'}
          appear
          unmountOnExit
        >
          <div className={styles.carousel__card}>
            <blockquote className={styles.carousel__text}>
              "{card.text}"
            </blockquote>

            <span className={styles.carousel__caption}>{card.caption}</span>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
