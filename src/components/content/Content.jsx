import React from 'react';
import styles from './Content.module.css';
import IntroduceBlock from './blocks/IntroduceBlock';
import SecondBlock from "./blocks/SecondBlock";
import ProductBlock from "./blocks/ProductBlock";

const Content = () => {
    return (
        <div className={styles.content__container}>
            <IntroduceBlock/>
            <SecondBlock/>
            <ProductBlock/>
        </div>
    );
};
export default Content;