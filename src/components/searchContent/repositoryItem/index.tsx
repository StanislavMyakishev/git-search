import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ForkLogo } from './assets/fork.svg';
import { ReactComponent as RepoLogo } from './assets/repo.svg';
import { ReactComponent as StarLogo } from './assets/star.svg';

const Article = styled.article`
    padding: ${({ theme }) => theme.spacing.small};
    margin-top: -1px;
    list-style-type: none;
    border-top: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};

    :first-of-type {
        border-top-color: transparent;
    }
`;

const RepositoryHeader = styled.h1`
    overflow-wrap: break-word;
    line-height: 1.25 !important;
    font-weight: 600 !important;
`;

const RepositoryDescription = styled.p`
    font-size: ${({ theme }) => theme.spacing.subtitle};
    line-height: 1.5;
    padding-right: ${({ theme }) => `${theme.spacing.medium} !important`};
    margin-top: 4px !important;
    margin-bottom: 4px !important;
    color: ${({ theme }) => theme.colors.lightGrayText};
    width: 75%;
`;

const RepositoryName = styled.a`
    color: ${({ theme }) => theme.colors.darkBlue};
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
        fill: ${({ theme }) => theme.colors.darkBlue};
        text-decoration: underline;
        cursor: pointer;
    }

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        font-size: ${({ theme }) => theme.spacing.medium};
    }
`;

const RepositoryInfo = styled.div`
    margin-top: ${({ theme }) => `${theme.spacing.extraSmall} !important`};
    font-size: ${({ theme }) => `${theme.spacing.subSmall} !important`};
    color: ${({ theme }) => theme.colors.lightGrayText};
`;

const RepositoryInlineInfo = styled.span`
    display: inline-block !important;
    margin-right: ${({ theme }) => theme.spacing.small};
    margin-left: 0 !important;
    font-size: ${({ theme }) => theme.spacing.subSmall};
`;

const RepositoryLangColor = styled.span`
    position: relative;
    top: 1px;
    display: inline-block;
    width: ${({ theme }) => theme.spacing.subSmall};
    height: ${({ theme }) => theme.spacing.subSmall};
    border-radius: 50%;
    background-color: #da5b0b;
    margin-right: 6px;
`;

const BaseRepositoryLink = styled.a`
    display: inline-block !important;
    text-decoration: none;

    svg {
        vertical-align: text-bottom;
        margin-right: 6px !important;
        overflow: hidden;
    }

    &:hover {
        fill: ${({ theme }) => theme.colors.darkBlue};
        color: ${({ theme }) => theme.colors.darkBlue};
        cursor: pointer;
    }
`;

const RepositoryInfoLink = styled(BaseRepositoryLink)`
    margin-right: ${({ theme }) => theme.spacing.small};
`;

const UserAvatarImage = styled.img`
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

const StarsToday = styled.span`
    display: inline-block !important;
    margin-top: 10px !important;

    svg {
        vertical-align: text-bottom;
        margin-right: 6px !important;
        overflow: hidden;
    }

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoints.forPhoneOnly}px`}) {
        float: right !important;
        margin-top: 0 !important;
    }
`;

const RepositoryItem: React.FC = () => {
    return (
        <Article>
            <RepositoryHeader>
                <RepositoryName>
                    <RepoLogo />
                    <span>ultralytics / </span>
                    yolov5
                </RepositoryName>
                <RepositoryDescription>
                    YOLOv5 in PyTorch > ONNX > CoreML > iOS
                </RepositoryDescription>
                <RepositoryInfo>
                    <RepositoryInlineInfo>
                        <RepositoryLangColor />
                        <span>TypeScript</span>
                    </RepositoryInlineInfo>
                    <RepositoryInfoLink>
                        <StarLogo />
                        888
                    </RepositoryInfoLink>
                    <RepositoryInfoLink>
                        <ForkLogo />
                        144
                    </RepositoryInfoLink>
                    <RepositoryInlineInfo>
                        Built by
                        <BaseRepositoryLink>
                            <UserAvatarImage
                                src={
                                    'https://avatars1.githubusercontent.com/u/26833433?s=40&v=4'
                                }
                            />
                        </BaseRepositoryLink>
                        <BaseRepositoryLink>
                            <UserAvatarImage
                                src={
                                    'https://avatars3.githubusercontent.com/u/466713?s=40&v=4'
                                }
                            />
                        </BaseRepositoryLink>
                    </RepositoryInlineInfo>
                    <StarsToday>
                        <StarLogo />
                        374 stars today
                    </StarsToday>
                </RepositoryInfo>
            </RepositoryHeader>
        </Article>
    );
};

export default RepositoryItem;
