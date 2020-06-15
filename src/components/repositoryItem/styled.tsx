import styled from 'styled-components';

export const Article = styled.article`
    padding: ${({ theme }) => theme.spacing.small};
    margin-top: -1px;
    list-style-type: none;
    border-top: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};

    :first-of-type {
        border-top-color: transparent;
    }
`;

export const RepositoryHeader = styled.h1`
    overflow-wrap: break-word;
    line-height: 1.25 !important;
    font-weight: 600 !important;
`;

export const RepositoryDescription = styled.p`
    font-size: ${({ theme }) => theme.spacing.subtitle};
    line-height: 1.5;
    padding-right: ${({ theme }) => `${theme.spacing.medium} !important`};
    margin-top: 4px !important;
    margin-bottom: 4px !important;
    color: ${({ theme }) => theme.colors.lightGrayText};
    width: 75%;
`;

export const RepositoryName = styled.a`
    color: ${({ theme }) => theme.colors.dark};
    background-color: initial;
    font-weight: 600 !important;
    text-decoration: none;
    font-size: ${({ theme }) => theme.spacing.subMedium};

    svg {
        vertical-align: text-bottom;
        margin-right: 6px !important;
        overflow: hidden;
    }

    span {
        font-weight: 400 !important;
    }

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        font-size: ${({ theme }) => theme.spacing.medium};
    }
`;

export const RepositoryInfo = styled.div`
    margin-top: ${({ theme }) => `${theme.spacing.extraSmall} !important`};
    font-size: ${({ theme }) => `${theme.spacing.subSmall} !important`};
    color: ${({ theme }) => theme.colors.lightGrayText};
`;

export const RepositoryInlineInfo = styled.span`
    display: inline-block !important;
    margin-top: ${({ theme }) => theme.spacing.extraSmall};
    margin-right: ${({ theme }) => theme.spacing.small};
    margin-left: 0 !important;
    font-size: ${({ theme }) => theme.spacing.subSmall};
`;

export const RepositoryLangColor = styled.span`
    position: relative;
    top: 1px;
    display: inline-block;
    width: ${({ theme }) => theme.spacing.subSmall};
    height: ${({ theme }) => theme.spacing.subSmall};
    border-radius: 50%;
    margin-right: 6px;
`;

export const BaseRepositoryLink = styled.a`
    color: ${({ theme }) => theme.colors.lightGrayText};
    display: inline-block !important;
    text-decoration: none;

    svg {
        vertical-align: text-bottom;
        margin-right: 6px !important;
        overflow: hidden;
    }

    &:hover {
        fill: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.dark};
        cursor: pointer;
    }
`;

export const RepositoryInfoLink = styled(BaseRepositoryLink)`
    margin-right: ${({ theme }) => theme.spacing.small};
`;

export const UserAvatarImage = styled.img`
    margin-left: 6px !important;
    margin-bottom: 4px !important;
    height: ${({ theme }) => theme.spacing.subMedium};
    width: ${({ theme }) => theme.spacing.subMedium};
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
`;
