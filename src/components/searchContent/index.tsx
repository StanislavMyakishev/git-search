import { useQuery } from '@apollo/react-hooks';
import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

import Loader from '../loader';
import RepositoryItem from '../repositoryItem';
import SettingsToolbar from '../settingsToolbar';
import Wrapper from '../wrapper';
import { GET_SEARCH_RESULTS } from './search.graphql';

const StyledWrapper = styled(Wrapper)`
    padding: ${({ theme }) => `0 ${theme.spacing.small}!important`};
`;

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    border-radius: 3px;
`;

interface SearchContentProps {
    searchQuery: string;
}

interface RepositoryOwner {
    login: string;
}

interface CountField {
    totalCount: number;
}

interface LangNode {
    color: string;
    name: string;
}

interface LangEdge {
    node: LangNode;
}

interface Languages {
    edges: LangEdge[];
}

interface UserNode {
    url: string;
    avatarUrl: string;
}

interface UsersEdge {
    node: UserNode;
}

interface MentionableUsers {
    edges: UsersEdge[];
}

interface QueryNode {
    url: string;
    name: string;
    owner: RepositoryOwner;
    description: string;
    stargazers: CountField;
    forks: CountField;
    languages: Languages;
    mentionableUsers: MentionableUsers;
}

interface PageInfo {
    hasPreviousPage: boolean;
    startCursor: string;
    hasNextPage: boolean;
    endCursor: string;
}

interface SearchResult {
    nodes: QueryNode[];
    __typename: string;
    repositoryCount: number;
    pageInfo: PageInfo | {};
}

interface QueryResults {
    search: SearchResult;
}

interface FetchMore {
    fetchMoreResult?: QueryResults;
}

const SearchContent = ({ searchQuery }: SearchContentProps): ReactElement => {
    const { loading, error, data, fetchMore } = useQuery(GET_SEARCH_RESULTS, {
        variables: { searchQuery },
    });

    if (loading) return <Loader />;
    if (error) return <div>Error! ${error.message}</div>;

    window.onscroll = () => {
        const isBottomReached =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (isBottomReached) {
            fetchMore({
                variables: {
                    cursor: data.search.pageInfo.endCursor,
                },
                updateQuery: (
                    previousResult: QueryResults,
                    { fetchMoreResult }: FetchMore,
                ) => {
                    const newEdges = fetchMoreResult
                        ? fetchMoreResult.search.nodes
                        : [];
                    const pageInfo = fetchMoreResult
                        ? fetchMoreResult.search.pageInfo
                        : {};

                    return newEdges.length
                        ? {
                              search: {
                                  __typename: previousResult.search.__typename,
                                  repositoryCount:
                                      previousResult.search.repositoryCount,
                                  nodes: [
                                      ...previousResult.search.nodes,
                                      ...newEdges,
                                  ],
                                  pageInfo,
                              },
                          }
                        : previousResult;
                },
            });
        }
    };

    const reposList = (data: QueryNode[]): ReactElement[] =>
        data.map((queryNode: QueryNode) => (
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
        ));

    const { repositoryCount } = data.search;

    return (
        <StyledWrapper>
            <ContentWrapper>
                <SettingsToolbar repositoryCount={repositoryCount} />
                {reposList(data.search.nodes)}
            </ContentWrapper>
        </StyledWrapper>
    );
};

export default memo(SearchContent);
