import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import { getDocumentScrollTop, scrollUp } from '../../common/helpers';
import * as Styled from './styled';

export default function ScrollUpButton(): React.ReactElement {
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
        <Styled.ScrollUpButton onClick={scrollUp} isVisible={isVisible}>
            &and;
        </Styled.ScrollUpButton>
    );
}
