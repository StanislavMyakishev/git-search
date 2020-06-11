import React from 'react';
import styled from 'styled-components';

import Wrapper from '../../wrapper';
import RepositoryItem from '../repositoryItem';
import SettingsToolbar from '../settingsToolbar';

const StyledWrapper = styled(Wrapper)`
    padding: ${({ theme }) => `0 ${theme.spacing.small}!important`};
`;

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    border-radius: 3px;
`;

class SearchContent extends React.Component {
    render(): React.ReactNode {
        return (
            <StyledWrapper>
                <ContentWrapper>
                    <SettingsToolbar />
                    <div>
                        <RepositoryItem />
                        <RepositoryItem />
                        <RepositoryItem />
                        <RepositoryItem />
                    </div>
                </ContentWrapper>
            </StyledWrapper>
        );
    }
}

export default SearchContent;
