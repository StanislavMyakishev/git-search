import React from 'react';

import { SearchResult } from '../../schema/generated';
import SearchList from './index';

export default {
    title: 'Search List',
    component: SearchList,
};

const search: SearchResult = {
    pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOjE=',
        endCursor: 'Y3Vyc29yOjEw',
        __typename: 'PageInfo',
    },
    repositoryCount: 441,
    nodes: [
        {
            name: 'freeCodeCamp',
            owner: { login: 'freeCodeCamp', __typename: 'RepositoryOwner' },
            description:
                "freeCodeCamp.org's open source codebase and curriculum. Learn to code at home.",
            stargazers: { totalCount: 311691, __typename: 'Stargazers' },
            forks: { totalCount: 23473, __typename: 'Forks' },
            url: 'https://github.com/freeCodeCamp/freeCodeCamp',
            mentionableUsers: { edges: Array(5), __typename: 'UserConnection' },
            languages: { edges: Array(1), __typename: 'LanguageConnection' },
            __typename: 'Repository',
        },
    ],
};

export const Basic = (): React.ReactElement => (
    <SearchList search={search} loading={false} />
);

export const Loading = (): React.ReactElement => (
    <SearchList search={search} loading={true} />
);

export const WithError = (): React.ReactElement => (
    <SearchList search={search} error={new Error()} loading={false} />
);
