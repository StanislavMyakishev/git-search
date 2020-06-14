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
    loading: boolean;
    error?: ApolloError;
    loadMore?: () => Promise<ApolloQueryResult<Query>>;
}

function useSearch({ query, type, first }: QuerySearchArgs): UseSearch {
    const { loading, error, data, fetchMore } = useQuery(GET_SEARCH_RESULTS, {
        notifyOnNetworkStatusChange: true,
        variables: { query, type, first },
    });

    if (loading && !data) return { loading, search: searchLoading };

    const loadMore = (): Promise<ApolloQueryResult<Query>> => {
        return fetchMore({
            variables: {
                cursor: data.search.pageInfo.endCursor,
            },
            updateQuery: (
                previousResult: Query,
                { fetchMoreResult }: FetchMore,
            ) => {
                const newEdges = fetchMoreResult
                    ? fetchMoreResult.search.nodes
                    : null;
                const pageInfo = fetchMoreResult
                    ? fetchMoreResult.search.pageInfo
                    : null;
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
        loadMore,
    };
}

export default useSearch;
