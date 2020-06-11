import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper';

const ExtendedWrapper = styled(Wrapper)`
    text-align: center !important;
`;

const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => `${theme.colors.lightGray} !important`};
    border-bottom: ${({ theme }) =>
        `1px solid ${theme.colors.lightGrayBorder} !important`};
    font-size: ${({ theme }) => `${theme.spacing.small} !important`};
`;

const HelperText = styled.p`
    margin: 0 auto;
    color: ${(props) => `${props.theme.colors.lightGrayText}!important`};
    font-size: ${({ theme }) => `${theme.spacing.small} !important`};
    @media (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        width: 50%;
    }
`;

const Heading = styled.h1`
    font-weight: 500;
    font-size: ${({ theme }) => `${theme.spacing.ultraLarge} !important`};

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        font-size: ${({ theme }) => `${theme.spacing.large} !important`};
    }
`;

export default function Header(): ReactElement {
    return (
        <HeaderWrapper>
            <ExtendedWrapper>
                <Heading>Search repositories</Heading>
                <HelperText>
                    See what the GitHub community is most excited about today.
                </HelperText>
            </ExtendedWrapper>
        </HeaderWrapper>
    );
}
