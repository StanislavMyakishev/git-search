import _ from 'lodash';
import React, { memo, ReactElement, useEffect } from 'react';
import styled from 'styled-components';

import useSearch from '../../hooks/useSearch';
import {
    QuerySearchArgs,
    Repository,
    SearchResult,
} from '../../schema/generated';
import Loader from '../loader';
import RepositoryItem from '../repositoryItem';
import SettingsToolbar from '../settingsToolbar';
import Wrapper from '../wrapper';

const StyledWrapper = styled(Wrapper)`
    padding: ${({ theme }) => `0 ${theme.spacing.small}!important`};
`;

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    border-radius: 3px;
`;

const SearchList = ({ query, type, first }: QuerySearchArgs): ReactElement => {
    const { search, loading, loadMore, hasNextPage } = useSearch({
        query,
        type,
        first,
    });

    const isLoadingMore = loading && !search;
    const isLoadingNewQuery = loading && search;

    const scrollHandler = _.throttle(() => {
        const isBottomReached =
            document.body.offsetHeight - window.innerHeight - window.scrollY <
            300;
        if (isBottomReached && hasNextPage && loadMore) {
            loadMore();
        }
    }, 1000);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [search, scrollHandler]);

    const reposList = (data: SearchResult): ReactElement[] | null =>
        data.nodes
            ? data.nodes.map((queryNode: Repository) => (
                  <RepositoryItem
                      key={queryNode.url}
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
                <SettingsToolbar repositoryCount={search.repositoryCount} />
                {isLoadingNewQuery && <Loader />}
                {reposList(search)}
                {isLoadingMore && <Loader />}
            </ContentWrapper>
        </StyledWrapper>
    );
};

export default memo(SearchList);
