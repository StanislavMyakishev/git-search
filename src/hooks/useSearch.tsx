import { useQuery } from '@apollo/react-hooks';
import { ApolloError, ApolloQueryResult } from 'apollo-client';

import { Query, QuerySearchArgs, SearchResult } from '../schema/generated';
import { GET_SEARCH_RESULTS } from '../schema/search.graphql';

interface FetchMore {
    fetchMoreResult?: Query;
}

const searchLoading = {
    repositoryCount: 0,
};

interface UseSearch {
    search: SearchResult;
    hasNextPage?: boolean;
    loading?: boolean;
    error?: ApolloError;
    onSearch?: (props: QuerySearchArgs) => Promise<ApolloQueryResult<Query>>;
    onLoad?: (props: QuerySearchArgs) => Promise<ApolloQueryResult<Query>>;
}

function useSearch(props: QuerySearchArgs): UseSearch {
    const { loading, error, data, fetchMore } = useQuery(GET_SEARCH_RESULTS, {
        notifyOnNetworkStatusChange: true,
        variables: { ...props },
    });

    if (loading && !data) return { loading, search: searchLoading };

    if (error && !data) return { error, search: searchLoading };

    const onSearch = (
        props: QuerySearchArgs,
    ): Promise<ApolloQueryResult<Query>> => {
        return fetchMore({
            variables: {
                ...props,
            },
            updateQuery: (
                previousResult: Query,
                { fetchMoreResult }: FetchMore,
            ) => {
                let newEdges = null,
                    pageInfo = null;
                if (fetchMoreResult) {
                    newEdges = fetchMoreResult.search.nodes;
                    pageInfo = fetchMoreResult.search.pageInfo;
                }
                return fetchMoreResult
                    ? {
                          search: {
                              __typename: fetchMoreResult.search.__typename,
                              repositoryCount:
                                  fetchMoreResult.search.repositoryCount,
                              nodes: [...newEdges],
                              pageInfo,
                          },
                      }
                    : previousResult;
            },
        });
    };

    const onLoad = (
        props: QuerySearchArgs,
    ): Promise<ApolloQueryResult<Query>> => {
        return fetchMore({
            variables: {
                ...props,
                cursor: data.search.pageInfo.endCursor,
            },
            updateQuery: (
                previousResult: Query,
                { fetchMoreResult }: FetchMore,
            ) => {
                let newEdges = null,
                    pageInfo = null;
                if (fetchMoreResult) {
                    newEdges = fetchMoreResult.search.nodes;
                    pageInfo = fetchMoreResult.search.pageInfo;
                }
                return newEdges
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
    };

    return {
        search: data.search,
        hasNextPage: data.search.pageInfo.hasNextPage,
        loading,
        error,
        onSearch,
        onLoad,
    };
}

export default useSearch;
