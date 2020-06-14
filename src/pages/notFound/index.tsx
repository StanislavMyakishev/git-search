import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

import PagePicture from './assets/404.webp';

const StyledWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) =>
        `calc(${theme.spacing.ultraLarge}) ${theme.spacing.small}!important`};
    max-width: 800px;
    margin: 0 auto;

    @media only screen and (max-width: ${({ theme }) =>
            `${theme.breakpoints.forPhoneOnly}px`}) {
        padding-right: ${({ theme }) => `${theme.spacing.small} !important`};
        padding-left: ${({ theme }) => `${theme.spacing.small} !important`};
    }

    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        padding-right: ${({ theme }) =>
            `${theme.spacing.ultraLarge} !important`};
        padding-left: ${({ theme }) =>
            `${theme.spacing.ultraLarge} !important`};
    }
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;

    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forPhoneOnly}px`}) {
        flex-flow: row wrap;
    }

    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletLandscapeUp}px`}) {
        flex-flow: row nowrap;
    }
`;

const StyledContentImage = styled.div`
    order: 1;
    flex: 0.5;
    text-align: center;
    object-fit: cover;
`;

const StyledContentText = styled.div`
    order: 2;
    flex: 0.5;
    text-align: center;
`;

const StyledHeader = styled.h1`
    font-size: ${({ theme }) => `calc(2 * ${theme.spacing.ultraLarge})`};

    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        font-size: ${({ theme }) => `calc(3 * ${theme.spacing.ultraLarge})`};
    }
`;

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
    margin-top: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 32px;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: ${({ theme }) => theme.spacing.medium};

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.light};
    }
`;

const StyledImage = styled.img`
    height: 40vh;
    vertical-align: middle;
    text-align: center;

    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        width: 100%;
        height: 100%;
    }
`;

const NotFound = (): ReactElement => {
    return (
        <StyledWrapper>
            <StyledContent>
                <StyledContentImage>
                    <StyledImage src={PagePicture} alt="404 page" />
                </StyledContentImage>
                <StyledContentText>
                    <StyledHeader>404</StyledHeader>
                    <h1>Just slowly go home!</h1>
                    <h2>You saw nothing...</h2>
                    <StyledButton>Go back</StyledButton>
                </StyledContentText>
            </StyledContent>
        </StyledWrapper>
    );
};

export default memo(NotFound);
