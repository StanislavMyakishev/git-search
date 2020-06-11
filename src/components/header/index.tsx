import React, { ReactElement } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => `${theme.colors.lightGray} !important`};
    border-bottom: ${({ theme }) =>
        `1px solid ${theme.colors.lightGrayBorder} !important`};
`;

const StyledHeader = styled.div`
    text-align: center !important;
    padding: 40px 16px !important;
    max-width: 1012px;
    margin: 0 auto;

    @media only screen and (max-width: ${({ theme }) =>
            `${theme.breakpoints.forPhoneOnly}px`}) {
        padding-right: 40px !important;
        padding-left: 40px !important;
    }
    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        padding-right: 16px !important;
        padding-left: 16px !important;
    }
`;

const HelperText = styled.p`
    margin: 0 auto;
    color: ${(props) => `${props.theme.colors.lightGrayText}!important`};
    font-size: 16px !important;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

const Heading = styled.h1`
    font-weight: 500;
    font-size: 32px !important;

    @media only screen and (min-width: 768px) {
        font-size: 40px !important;
    }
`;

export default function Header(): ReactElement {
    return (
        <HeaderWrapper>
            <StyledHeader>
                <Heading>Search repositories</Heading>
                <HelperText>
                    See what the GitHub community is most excited about today.
                </HelperText>
            </StyledHeader>
        </HeaderWrapper>
    );
}