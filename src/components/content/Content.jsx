import React from 'react';

import IntroduceBlock from './blocks/IntroduceBlock';
import SecondBlock from "./blocks/SecondBlock";
import ProductBlock from "./blocks/ProductBlock";
import ApplicationBlock from "./blocks/ApplicationBlock";
import FeedbackBlock from "./blocks/FeedbackBlock";

import styles from './Content.module.css';
import OutroBlock from "./blocks/OutroBlock";

const Content = () => {
    return (
        <div className={styles.content__container}>
            <IntroduceBlock/>
            <SecondBlock/>
            <ProductBlock/>
            <ApplicationBlock/>
            <FeedbackBlock/>
            <OutroBlock/>
        </div>
    );
};
export default Content;