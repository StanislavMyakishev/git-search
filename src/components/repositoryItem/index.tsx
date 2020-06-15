import React, { memo, ReactElement } from 'react';

import { ReactComponent as ForkLogo } from './assets/fork.svg';
import { ReactComponent as RepoLogo } from './assets/repo.svg';
import { ReactComponent as StarLogo } from './assets/star.svg';
import * as Styled from './styled';

interface LanguageInfo {
    langColor: string | null;
    langName: string | null;
}

interface UserInfo {
    userUrl: string;
    avatarUrl: string;
}

interface RepositoryItemProps {
    repoName: string;
    repoOwner: string;
    repoUrl: string;
    description: string;
    stars: number;
    forks: number;
    language: LanguageInfo;
    mentionableUsers: UserInfo[];
}

const RepositoryItem = ({
    repoName,
    repoOwner,
    repoUrl,
    description,
    language,
    stars,
    forks,
    mentionableUsers,
}: RepositoryItemProps): ReactElement => {
    const { langColor, langName } = language;
    const stargazersLink = `https://github.com/${repoOwner}/${repoName}/stargazers`;
    const forkLink = `https://github.com/${repoOwner}/${repoName}/network/members.${repoName}`;

    return (
        <Styled.Article>
            <Styled.RepositoryHeader>
                <Styled.RepositoryName href={repoUrl} target="_blank">
                    <RepoLogo />
                    <span>{repoName} / </span>
                    {repoOwner}
                </Styled.RepositoryName>
                <Styled.RepositoryDescription>
                    {description}
                </Styled.RepositoryDescription>
                <Styled.RepositoryInfo>
                    {langColor && (
                        <Styled.RepositoryInlineInfo>
                            <Styled.RepositoryLangColor
                                style={{ backgroundColor: langColor }}
                            />
                            <span>{langName}</span>
                        </Styled.RepositoryInlineInfo>
                    )}
                    <Styled.RepositoryInfoLink
                        href={stargazersLink}
                        target="_blank"
                    >
                        <StarLogo />
                        {stars}
                    </Styled.RepositoryInfoLink>
                    <Styled.RepositoryInfoLink href={forkLink} target="_blank">
                        <ForkLogo />
                        {forks}
                    </Styled.RepositoryInfoLink>
                    <Styled.RepositoryInlineInfo>
                        Built by
                        {mentionableUsers.map((user) => (
                            <Styled.BaseRepositoryLink
                                key={user.userUrl}
                                href={user.userUrl}
                                target="_blank"
                            >
                                <Styled.UserAvatarImage src={user.avatarUrl} />
                            </Styled.BaseRepositoryLink>
                        ))}
                    </Styled.RepositoryInlineInfo>
                </Styled.RepositoryInfo>
            </Styled.RepositoryHeader>
        </Styled.Article>
    );
};

export default memo(RepositoryItem);
