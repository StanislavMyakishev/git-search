import { ApolloError } from 'apollo-client';
import React, { memo, ReactElement } from 'react';

import { Repository, SearchResult } from '../../schema/generated';
import ErrorMessage from '../errorMessage';
import RepositoryItem from '../repositoryItem';
import SettingsToolbar from '../settingsToolbar';
import * as Styled from './styled';

interface AllProps {
    search: SearchResult;
    loading?: boolean;
    error?: ApolloError;
}

const SearchList = ({ search, loading, error }: AllProps): ReactElement => {
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
        <Styled.SearchWrapper>
            <Styled.ContentWrapper>
                <SettingsToolbar
                    loading={loading}
                    repositoryCount={search.repositoryCount}
                />
                {reposList(search)}
            </Styled.ContentWrapper>
        </Styled.SearchWrapper>
    );
};

export default memo(SearchList);
