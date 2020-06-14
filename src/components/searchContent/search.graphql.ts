import { gql } from 'apollo-boost';

export const GET_SEARCH_RESULTS = gql`
    query($searchQuery: String!, $cursor: String) {
        search(
            query: $searchQuery
            type: REPOSITORY
            first: 10
            after: $cursor
        ) {
            __typename
            pageInfo {
                hasPreviousPage
                startCursor
                hasNextPage
                endCursor
            }
            repositoryCount
            nodes {
                ... on Repository {
                    name
                    owner {
                        login
                    }
                    description
                    stargazers {
                        totalCount
                    }
                    forks {
                        totalCount
                    }
                    url
                    mentionableUsers(first: 5) {
                        edges {
                            node {
                                url
                                avatarUrl
                            }
                        }
                    }
                    languages(first: 1) {
                        edges {
                            node {
                                color
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;
