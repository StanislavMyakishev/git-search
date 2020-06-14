import { gql } from 'apollo-boost';

export const GET_SEARCH_RESULTS = gql`
    query($query: String!, $cursor: String, $type: SearchType!, $first: Int!) {
        search(query: $query, type: $type, first: $first, after: $cursor) {
            __typename
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
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
