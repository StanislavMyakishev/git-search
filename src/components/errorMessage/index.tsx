import { History } from 'history';
import React, { memo, ReactElement } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import Button from '../button';
import Whops from './assets/whops.jpg';

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

const StyledErrorMessage = styled.div`
    text-align: center;
`;

const StyledImage = styled.img`
    height: 30vh;
`;

interface AllProps {
    history: History;
}

const ErrorMessage = ({ history }: AllProps): ReactElement => {
    const handleRefreshPage = (): void => {
        history.go(0);
    };

    return (
        <StyledWrapper>
            <StyledErrorMessage>
                <StyledImage src={Whops} alt="Something went wrong" />
                <h1>Sorry, something went wrong</h1>
                <h3>Try reloading the page.</h3>
                <h3>
                    We are working hard to fix it for you as soon as possible.
                </h3>
                <Button onClickHandler={handleRefreshPage}>Reload</Button>
            </StyledErrorMessage>
        </StyledWrapper>
    );
};

export default memo(withRouter(ErrorMessage));
