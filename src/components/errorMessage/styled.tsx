import styled from 'styled-components';

export const ErrorWrapper = styled.div`
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

export const ErrorMessage = styled.div`
    text-align: center;
`;

export const ErrorImage = styled.img`
    height: 30vh;
`;
