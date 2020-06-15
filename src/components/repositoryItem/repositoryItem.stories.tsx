import React from 'react';

import RepositoryItem from './index';

export default {
    title: 'Repository Item',
    component: RepositoryItem,
};

export const Basic = (): React.ReactElement => (
    <RepositoryItem
        repoName={'repositoryName'}
        repoOwner={'repositoryOwner'}
        repoUrl={'/1'}
        description={'Repository description'}
        stars={100}
        forks={100}
        language={{
            langColor: '#ff0000',
            langName: 'TypeScript',
        }}
        mentionableUsers={[
            {
                userUrl: 'https://github.com/StanislavMyakishev',
                avatarUrl:
                    'https://avatars2.githubusercontent.com/u/37376899?s=60&v=4',
            },
        ]}
    />
);
