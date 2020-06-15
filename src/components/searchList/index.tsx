import { ApolloError } from 'apollo-client';
import _ from 'lodash';
import React, { memo, ReactElement, useEffect } from 'react';
import styled from 'styled-components';

import {
    getClientHeight,
    getDocumentScrollHeight,
    getDocumentScrollTop,
} from '../../common/helpers';
import { Repository, SearchResult } from '../../schema/generated';
import ErrorMessage from '../errorMessage';
import RepositoryItem from '../repositoryItem';
import SettingsToolbar from '../settingsToolbar';

const StyledWrapper = styled.div`
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

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    border-radius: 3px;
`;

interface AllProps {
    search: SearchResult;
    hasNextPage?: boolean;
    loading?: boolean;
    error?: ApolloError;
    onLoad?: () => void;
}

const SearchList = ({
    search,
    loading,
    error,
    hasNextPage,
    onLoad,
}: AllProps): ReactElement => {
    const scrollHandler = (): void => {
        const scrollTop = getDocumentScrollTop(),
            scrollHeight = getDocumentScrollHeight(),
            clientHeight = getClientHeight();
        const isBottomReached =
            Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (isBottomReached && !loading && hasNextPage && onLoad) {
            onLoad();
        }
    };

    const wrappedScrollHandler = _.throttle(scrollHandler, 500);

    useEffect(() => {
        window.addEventListener('scroll', wrappedScrollHandler);
        return () => {
            window.removeEventListener('scroll', wrappedScrollHandler);
        };
    }, [search, wrappedScrollHandler]);

    if (error) return <ErrorMessage />;

    const reposList = (data: SearchResult): ReactElement[] | null =>
        data.nodes
            ? data.nodes.map((queryNode: Repository, index) => (
                  <RepositoryItem
                      key={queryNode.url + index}
                      repoName={queryNode.name}
                      repoOwner={queryNode.owner.login}
                      repoUrl={queryNode.url}
                      description={queryNode.description}
                      stars={queryNode.stargazers.totalCount}
                      forks={queryNode.forks.totalCount}
                      language={{
                          langColor: queryNode.languages.edges[0]
                              ? queryNode.languages.edges[0].node.color
                              : null,
                          langName: queryNode.languages.edges[0]
                              ? queryNode.languages.edges[0].node.name
                              : null,
                      }}
                      mentionableUsers={queryNode.mentionableUsers.edges.map(
                          (edge) => ({
                              userUrl: edge.node.url,
                              avatarUrl: edge.node.avatarUrl,
                          }),
                      )}
                  />
              ))
            : null;

    return (
        <StyledWrapper>
            <ContentWrapper>
                <SettingsToolbar
                    loading={loading}
                    repositoryCount={search.repositoryCount}
                />
                {reposList(search)}
            </ContentWrapper>
        </StyledWrapper>
    );
};

export default memo(SearchList);
