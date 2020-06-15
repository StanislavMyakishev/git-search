import styled from 'styled-components';

export const SearchWrapper = styled.div`
    padding: ${({ theme }) =>
        `calc(${theme.spacing.ultraLarge} + 2 * ${theme.spacing.extraSmall}) ${theme.spacing.small}!important`};
    max-width: 1012px;
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

export const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    border-radius: 3px;
`;
