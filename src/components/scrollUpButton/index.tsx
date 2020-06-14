import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getDocumentScrollTop } from '../../common';

const StyledButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 30px;
    width: 50px;
    height: 50px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
    }
`;

export default function ScrollUpButton(): React.ReactElement {
    const [isVisible, setIsVisible] = useState(false);
    const scrollUp = (): void => {
        window.scrollTo(0, 0);
    };

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
        <StyledButton
            onClick={scrollUp}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            &and;
        </StyledButton>
    );
}
