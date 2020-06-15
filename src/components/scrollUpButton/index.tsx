import _ from 'lodash';
import React, { memo, useEffect, useState } from 'react';

import { getDocumentScrollTop, scrollUp } from '../../common/helpers';
import * as Styled from './styled';

interface AllProps {
    forceShow?: boolean;
}

const ScrollUpButton = ({ forceShow }: AllProps): React.ReactElement => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = _.throttle(() => {
        const isScrolled = getDocumentScrollTop() > 40;
        setIsVisible(isScrolled);
    }, 800);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <Styled.ScrollUpButton
            onClick={scrollUp}
            isVisible={isVisible || !!forceShow}
        >
            &and;
        </Styled.ScrollUpButton>
    );
};

export default memo(ScrollUpButton);
