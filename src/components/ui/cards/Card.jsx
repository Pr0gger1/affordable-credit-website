import React from "react";
import styles from './styles/Card.module.scss';

export const Card = ( {
    background = '',
    direction = 'column',
    children
                     } ) => {
    return (
        <div className={styles.card} style={{
            backgroundColor: background,
            flexDirection: direction
        }}>
            { children }
        </div>
    );
};