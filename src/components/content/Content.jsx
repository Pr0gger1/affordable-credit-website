import React from 'react';

import IntroduceBlock from './blocks/IntroduceBlock';
import SecondBlock from "./blocks/SecondBlock";
import ProductBlock from "./blocks/ProductBlock";
import ApplicationBlock from "./blocks/ApplicationBlock";
import FeedbackBlock from "./blocks/FeedbackBlock";
import OutroBlock from "./blocks/OutroBlock";

const Content = () => {
    return (
        <>
            <IntroduceBlock/>
            <SecondBlock/>
            <ProductBlock/>
            <ApplicationBlock/>
            <FeedbackBlock/>
            <OutroBlock/>
        </>
    );
};
export default Content;