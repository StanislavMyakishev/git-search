export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export enum SearchType {
    Repository = 'REPOSITORY',
}

export type Query = {
    __typename?: 'Query';
    search: SearchResult;
};

export type QuerySearchArgs = {
    query: Scalars['String'];
    after?: Maybe<Scalars['String']>;
    type: SearchType;
    first: Scalars['Int'];
};

export type Repository = {
    __typename?: 'Repository';
    name: Scalars['String'];
    owner: RepositoryOwner;
    description: Scalars['String'];
    stargazers: Stargazers;
    forks: Forks;
    url: Scalars['String'];
    mentionableUsers: UserConnection;
    languages: LanguageConnection;
};

export type RepositoryMentionableUsersArgs = {
    first: Scalars['Int'];
};

export type RepositoryLanguagesArgs = {
    first: Scalars['Int'];
};

export type SearchResult = {
    __typename?: 'SearchResult';
    pageInfo?: Maybe<PageInfo>;
    repositoryCount: Scalars['Int'];
    nodes?: Maybe<Array<Repository>>;
};

export type PageInfo = {
    __typename?: 'PageInfo';
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    startCursor: Scalars['String'];
    endCursor: Scalars['String'];
};

export type CountableNode = {
    totalCount: Scalars['Int'];
};

export type RepositoryOwner = {
    __typename?: 'RepositoryOwner';
    login: Scalars['String'];
};

export type UserConnection = {
    __typename?: 'UserConnection';
    edges: Array<UserEdge>;
};

export type UserEdge = {
    __typename?: 'UserEdge';
    node: User;
};

export type User = {
    __typename?: 'User';
    url: Scalars['String'];
    avatarUrl: Scalars['String'];
};

export type LanguageConnection = {
    __typename?: 'LanguageConnection';
    edges: Array<LanguageEdge>;
};

export type LanguageEdge = {
    __typename?: 'LanguageEdge';
    node: Language;
};

export type Language = {
    __typename?: 'Language';
    color: Scalars['String'];
    name: Scalars['String'];
};

export type Stargazers = CountableNode & {
    __typename?: 'Stargazers';
    totalCount: Scalars['Int'];
};

export type Forks = CountableNode & {
    __typename?: 'Forks';
    totalCount: Scalars['Int'];
};
